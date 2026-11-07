import type { Language } from '@/types/Language';
import { defaultLanguage, isLanguageSupported } from './config';
import { resources } from '.';

export function getLangFromUrl(url: URL): Language {
  const lang = url.pathname.split('/')[1];

  return isLanguageSupported(lang) ? (lang as Language) : defaultLanguage;
}

export const getTranslations = (lang: Language) => resources[lang];

export function getLocalizedPath(lang: Language, pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);

  // Remove current language prefix
  if (segments[0] && isLanguageSupported(segments[0])) {
    segments.shift();
  }

  const path = segments.join('/');

  return path ? `/${lang}/${path}/` : `/${lang}/`;
}
