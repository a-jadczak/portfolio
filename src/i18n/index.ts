import type { Language } from '@/types/Language';
import en from './locales/en.json';
import pl from './locales/pl.json';

type Translation = {
  [key: string]: string | Translation;
};

export const resources = {
  en: { translation: en },
  pl: { translation: pl },
} satisfies Record<Language, { translation: Translation }>;
