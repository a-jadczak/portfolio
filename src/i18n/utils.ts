import type { Language } from '@/types/Language';
import { defaultLanguage, isLanguageSupported } from './config';
import { resources } from '.';

export function getLangFromUrl(url: URL): Language {
  // Astro renders static variants at /localized/{lang}/ during the build.
  const [, prefix, lang] = url.pathname.split('/');

  return prefix === 'localized' && lang && isLanguageSupported(lang) ? lang : defaultLanguage;
}

export const getTranslations = (lang: Language) => resources[lang];

export async function switchLanguage(lang: Language) {
  await window.cookieStore.set({
    name: 'language',
    value: lang,
    path: '/',
    sameSite: 'lax',
  });

  const { pathname, search, hash } = window.location;
  const path = pathname + search;

  // A same-page destination with a hash only scrolls in Astro's router.
  // Fetch the page without the hash, then restore it without another navigation.
  const { navigate } = await import('astro:transitions/client');
  await navigate(path, { history: 'replace' });

  if (hash && window.location.pathname + window.location.search === path) {
    window.history.replaceState(window.history.state, '', path + hash);
  }
}
