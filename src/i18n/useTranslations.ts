import { useContext } from 'react';
import type { I18n } from '@/types/I18n';
import { LanguageContext } from './LanguageProvider';
import { getTranslations } from './utils';

export function useTranslations(): I18n {
  const lang = useContext(LanguageContext);

  if (lang === null) {
    throw new Error('useTranslations requires LanguageProvider');
  }

  return { lang, t: getTranslations(lang).translation };
}
