import type { resources } from '@/i18n';
import type { Language } from './Language';

export interface I18n {
  lang: Language;
  t: (typeof resources)[Language]['translation'];
}
