import type { Language } from '@/types/Language';
import { defaultLanguage, isLanguageSupported } from './config';
import { resources } from '.';

export function getLangFromUrl(url: URL): Language {
  // Astro renders static variants at /localized/{lang}/ during the build.
  const [, prefix, lang] = url.pathname.split('/');

  return prefix === 'localized' && lang && isLanguageSupported(lang) ? lang : defaultLanguage;
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
