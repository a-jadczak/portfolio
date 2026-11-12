import { defineMiddleware } from 'astro:middleware';
import { getLangFromUrl, getTranslations } from '@/i18n/utils';
import { isLanguageSupported } from '@/i18n/config';

export const onRequest = defineMiddleware(({ locals, url, cookies, isPrerendered }, next) => {
  let lang = getLangFromUrl(url);

  if (!isPrerendered) {
    const savedLanguage = cookies.get('language')?.value;

    if (savedLanguage && isLanguageSupported(savedLanguage)) {
      lang = savedLanguage;
    }
  }

  locals.i18n = {
    lang,
    t: getTranslations(lang).translation,
  };

  return next();
});
