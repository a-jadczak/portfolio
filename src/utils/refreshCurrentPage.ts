export async function refreshCurrentPage(onRefresh?: () => void | Promise<void>) {
  const { pathname, search, hash } = window.location;
  const path = pathname + search;

  // A same-page destination with a hash only scrolls in Astro's router.
  // Fetch the page without the hash, then restore it without another navigation.
  const { navigate } = await import('astro:transitions/client');
  await navigate(path, { history: 'replace' });

  if (hash && window.location.pathname + window.location.search === path) {
    window.history.replaceState(window.history.state, '', path + hash);
  }

  await onRefresh?.();
}
