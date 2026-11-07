import type { Language } from '@/types/Language';

export const languages = {
  en: 'English',
  pl: 'Polski',
} as Record<Language, string>;

export const defaultLanguage: Language = 'en';

export const supportedLanguages = Object.keys(languages) as Language[];

export function isLanguageSupported(value: string): value is Language {
  return supportedLanguages.includes(value as Language);
}
