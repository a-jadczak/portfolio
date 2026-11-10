import { next, rewrite } from '@vercel/functions';
import Negotiator from 'negotiator';
import { supportedLanguages, defaultLanguage } from './src/i18n/config.js';

export const config = {
  runtime: 'nodejs',
  matcher: ['/', '/about', '/projects', '/contact'],
};

export default function middleware(request: Request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return next();
  }

  const cookie = request.headers.get('cookie') ?? '';
  const savedLanguage = cookie.match(/(?:^|;\s*)language=(en|pl)(?:;|$)/)?.[1];

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') ?? '',
    },
  });

  const language = savedLanguage ?? negotiator.language(supportedLanguages) ?? defaultLanguage;

  const destination = new URL(request.url);
  const pagePath = destination.pathname.replace(/\/$/, '');
  destination.pathname = `/localized/${language}${pagePath}/`;

  return rewrite(destination);
}
