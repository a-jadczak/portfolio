import type { PageInfo } from '@/types/PageInfo';

export const pages = [
  { href: '/', name: 'Home' },
  { href: '/about', name: 'About' },
  { href: '/projects', name: 'Projects' },
  { href: '/contact', name: 'Contact' },
] as const;

export type PageName = (typeof pages)[number]['name'];

export const getCurrentPageInfo = (href: string): PageInfo => {
  const index = pages.findIndex((page) => page.href === href);

  return { name: pages[index]?.name ?? '', index };
};
