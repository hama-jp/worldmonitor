/**
 * Language State Management
 * Stores user language preference in localStorage with pub/sub notification.
 */

export type Language = 'en' | 'ja';

const STORAGE_KEY = 'worldmonitor-language';
const listeners: Array<(lang: Language) => void> = [];

export function getLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'ja' ? 'ja' : 'en';
}

export function setLanguage(lang: Language): void {
  const prev = getLanguage();
  localStorage.setItem(STORAGE_KEY, lang);
  if (lang !== prev) {
    listeners.forEach(cb => cb(lang));
  }
}

export function onLanguageChange(callback: (lang: Language) => void): () => void {
  listeners.push(callback);
  return () => {
    const idx = listeners.indexOf(callback);
    if (idx >= 0) listeners.splice(idx, 1);
  };
}
