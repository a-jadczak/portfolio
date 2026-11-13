import type { Language } from '@/types/Language';
import { defaultLanguage, isLanguageSupported } from './config';
import { resources } from '.';

export function getLangFromUrl(url: URL): Language {
  // Astro renders static variants at /localized/{lang}/ during the build.
  const [, prefix, lang] = url.pathname.split('/');

  return prefix === 'localized' && isLanguageSupported(lang) ? lang : defaultLanguage;
}

export const getTranslations = (lang: Language) => resources[lang];

export const getTranslationsByUrl = (url: URL) => getTranslations(getLangFromUrl(url));

export async function switchLanguage(
  lang: Language,
  onLanguageChange?: () => void | Promise<void>
) {
  await window.cookieStore.set({
    name: 'language',
    value: lang,
    path: '/',
    sameSite: 'lax',
  });

  await onLanguageChange?.();
}
