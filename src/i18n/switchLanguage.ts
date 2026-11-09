import { navigate } from 'astro:transitions/client';
import type { Language } from '@/types/Language';

export async function switchLanguage(lang: Language) {
  document.cookie = `locale=${lang}; Path=/; SameSite=Lax`;

  const { pathname, search, hash } = window.location;
  const path = pathname + search;

  // A same-page destination with a hash only scrolls in Astro's router.
  // Fetch the page without the hash, then restore it without another navigation.
  await navigate(path, { history: 'replace' });

  if (hash && window.location.pathname + window.location.search === path) {
    window.history.replaceState(window.history.state, '', path + hash);
  }
}
