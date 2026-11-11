import type { AstroComponentFactory } from 'astro/runtime/server/render/index.js';
import type { I18n } from './I18n';

export interface PageInfo {
  href: string;
  name: keyof I18n['t']['header']['navigation'];
  indicator: string;
  view: AstroComponentFactory;
}
