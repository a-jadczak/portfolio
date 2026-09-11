import type { PageInfo } from '@/types/PageInfo';

export const pages = new Map<string, string>([
  ['/', 'Home'],
  ['/about', 'About'],
  ['/projects', 'Projects'],
  ['/contact', 'Contact'],
]);

export const getCurrentPageInfo = (href: string): PageInfo => {
  return { name: pages.get(href) ?? '', index: [...pages.keys()].indexOf(href) };
};
