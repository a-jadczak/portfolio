import { createContext, type ReactNode } from 'react';
import type { Language } from '@/types/Language';
import type { Nullable } from '@/types/Nullable';

export const LanguageContext = createContext<Nullable<Language>>(null);

export function LanguageProvider({ lang, children }: { lang: Language; children: ReactNode }) {
  return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
}
