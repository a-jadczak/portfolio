import About from '@/app/pages/about/About.astro';
import Contact from '@/app/pages/contact/Contact.astro';
import Home from '@/app/pages/home/Home.astro';
import PageNotFound from '@/app/pages/not-found/PageNotFound.astro';
import Projects from '@/app/pages/projects/Projects.astro';
import type { PageInfo } from '@/types/PageInfo';

export type PageName = (typeof pages)[number]['name'];

export const pages = [
  { href: '/', name: 'Home', indicator: '01', view: Home },
  { href: '/about', name: 'About', indicator: '02', view: About },
  { href: '/projects', name: 'Projects', indicator: '03', view: Projects },
  { href: '/contact', name: 'Contact', indicator: '04', view: Contact },
] as const satisfies readonly PageInfo[];

const notFoundPage: PageInfo = {
  href: '/not-found',
  name: 'Not Found',
  indicator: '404',
  view: PageNotFound,
};

export const getCurrentPageInfo = (href: string): PageInfo =>
  pages.find((page) => page.href === href) || notFoundPage;

export const getView = (page: PageName) => pages.find((p) => p.name === page)?.view || PageNotFound;
