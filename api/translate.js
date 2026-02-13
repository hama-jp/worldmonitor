/**
 * Batch Translation API Endpoint
 * Translates an array of texts to the target language using Groq LLM.
 * Redis cache per individual text for cross-user deduplication.
 */

import { Redis } from '@upstash/redis';

export const config = {
  runtime: 'edge',
};

const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
const MODEL = 'llama-3.1-8b-instant';
const CACHE_TTL_SECONDS = 86400; // 24 hours
const CACHE_VERSION = 'v1';
const MAX_BATCH_SIZE = 30;

let redis = null;
let redisInitFailed = false;
function getRedis() {
  if (redis) return redis;
  if (redisInitFailed) return null;
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    try {
      redis = new Redis({ url, token });
    } catch (err) {
      console.warn('[Translate] Redis init failed:', err.message);
      redisInitFailed = true;
      return null;
    }
  }
  return redis;
}

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(36);
}

function getCacheKey(text, targetLang) {
  return `translate:${CACHE_VERSION}:${targetLang}:${hashString(text.toLowerCase().trim())}`;
}

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'API key not configured', fallback: true }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { texts, targetLang = 'ja' } = await request.json();

    if (!texts || !Array.isArray(texts) || texts.length === 0) {
      return new Response(JSON.stringify({ error: 'texts array required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const batch = texts.slice(0, MAX_BATCH_SIZE);
    const results = new Array(batch.length).fill(null);
    const uncachedIndices = [];

    // Check Redis cache for each text individually
    const redisClient = getRedis();
    if (redisClient) {
      try {
        const keys = batch.map(t => getCacheKey(t, targetLang));
        const cached = await redisClient.mget(...keys);
        for (let i = 0; i < batch.length; i++) {
          if (cached[i]) {
            results[i] = cached[i];
          } else {
            uncachedIndices.push(i);
          }
        }
      } catch (err) {
        console.warn('[Translate] Cache read error:', err.message);
        for (let i = 0; i < batch.length; i++) {
          if (results[i] === null) uncachedIndices.push(i);
        }
      }
    } else {
      for (let i = 0; i < batch.length; i++) uncachedIndices.push(i);
    }

    // If all cached, return immediately
    if (uncachedIndices.length === 0) {
      console.log(`[Translate] All ${batch.length} texts cached`);
      return new Response(JSON.stringify({ translations: results }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build numbered list of uncached texts for batch translation
    const uncachedTexts = uncachedIndices.map(i => batch[i]);
    const numberedList = uncachedTexts.map((t, i) => `${i + 1}. ${t}`).join('\n');

    const systemPrompt = `You are a professional translator. Translate the following English news headlines into natural Japanese.
Rules:
- Return ONLY the translations, one per line, numbered to match the input
- Keep proper nouns (company names, people, places) in their commonly used Japanese form
- Keep the tone journalistic and concise
- Do NOT add explanations or commentary
- Format: "1. 翻訳文\\n2. 翻訳文"`;

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: numberedList },
        ],
        temperature: 0.2,
        max_tokens: uncachedTexts.length * 80,
        top_p: 0.9,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[Translate] Groq error:', response.status, errorText);

      // On failure, return original texts as fallback
      for (const i of uncachedIndices) {
        results[i] = batch[i];
      }
      return new Response(JSON.stringify({ translations: results, fallback: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await response.json();
    const rawOutput = data.choices?.[0]?.message?.content?.trim() || '';

    // Parse numbered translations
    const lines = rawOutput.split('\n').filter(l => l.trim());
    const translations = [];
    for (const line of lines) {
      // Match "1. text" or "1) text" patterns
      const match = line.match(/^\d+[\.\)]\s*(.+)/);
      if (match) {
        translations.push(match[1].trim());
      }
    }

    // Map translations back to their original positions
    const cacheWrites = [];
    for (let j = 0; j < uncachedIndices.length; j++) {
      const idx = uncachedIndices[j];
      const translated = translations[j] || batch[idx]; // fallback to original
      results[idx] = translated;

      // Queue cache write
      if (redisClient && translations[j]) {
        const key = getCacheKey(batch[idx], targetLang);
        cacheWrites.push(redisClient.set(key, translated, { ex: CACHE_TTL_SECONDS }));
      }
    }

    // Write cache in parallel (non-blocking)
    if (cacheWrites.length > 0) {
      Promise.all(cacheWrites).catch(err => {
        console.warn('[Translate] Cache write error:', err.message);
      });
    }

    console.log(`[Translate] Translated ${uncachedIndices.length}/${batch.length} texts (${batch.length - uncachedIndices.length} cached)`);

    return new Response(JSON.stringify({
      translations: results,
      cached: uncachedIndices.length === 0,
      tokens: data.usage?.total_tokens || 0,
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800',
      },
    });

  } catch (error) {
    console.error('[Translate] Error:', error.message);
    return new Response(JSON.stringify({ error: error.message, fallback: true }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
