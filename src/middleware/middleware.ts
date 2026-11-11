import { defineMiddleware } from 'astro:middleware';
import { getLangFromUrl, getTranslations } from '@/i18n/utils';

export const onRequest = defineMiddleware(({ locals, url }, next) => {
  const lang = getLangFromUrl(url);

  locals.i18n = {
    lang,
    t: getTranslations(lang).translation,
  };

  return next();
});
