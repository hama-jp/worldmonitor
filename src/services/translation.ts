/**
 * Client-side Translation Service
 * Calls /api/translate for batch headline translation.
 * In-memory cache prevents duplicate API calls within a session.
 */

import { getLanguage, onLanguageChange } from './language';

const memoryCache = new Map<string, string>();

// Clear memory cache when language changes
onLanguageChange(() => {
  memoryCache.clear();
});

/**
 * Translate an array of texts to the current language.
 * Returns original texts immediately if language is 'en'.
 */
export async function translateTexts(texts: string[]): Promise<string[]> {
  if (getLanguage() === 'en' || texts.length === 0) {
    return texts;
  }

  // Split into cached and uncached
  const results: string[] = texts.slice(); // start with originals as fallback
  const uncachedIndices: number[] = [];

  for (let i = 0; i < texts.length; i++) {
    const cached = memoryCache.get(texts[i]!);
    if (cached) {
      results[i] = cached;
    } else {
      uncachedIndices.push(i);
    }
  }

  if (uncachedIndices.length === 0) {
    return results;
  }

  // Call translation API for uncached texts
  const uncachedTexts = uncachedIndices.map(i => texts[i]!);

  try {
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ texts: uncachedTexts, targetLang: 'ja' }),
    });

    if (!response.ok) {
      console.warn('[Translation] API error:', response.status);
      return results;
    }

    const data = await response.json();
    const translations: string[] = data.translations || [];

    for (let j = 0; j < uncachedIndices.length; j++) {
      const idx = uncachedIndices[j]!;
      const translated = translations[j] || texts[idx]!;
      results[idx] = translated;
      memoryCache.set(texts[idx]!, translated);
    }

    return results;
  } catch (error) {
    console.warn('[Translation] Failed:', error);
    return results;
  }
}

/** Clear the in-memory translation cache */
export function clearTranslationCache(): void {
  memoryCache.clear();
}
