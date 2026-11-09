import type { AstroComponentFactory } from 'astro/runtime/server/render/index.js';

export interface PageInfo {
  href: string;
  name: string;
  indicator: string;
  view: AstroComponentFactory;
}
