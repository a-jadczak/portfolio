import { next, rewrite } from '@vercel/functions';
import Negotiator from 'negotiator';
import { defaultLanguage, isLanguageSupported, supportedLanguages } from './src/i18n/config.js';
import type { Language } from './src/types/Language.js';

export const config = {
  runtime: 'nodejs',
  matcher: ['/', '/about', '/projects', '/contact'],
};

function getSavedLanguage(request: Request): string | undefined {
  const cookies = request.headers.get('cookie') ?? '';
  return cookies.match(/(?:^|;)\s*language=([^;]*)/)?.[1]?.trim();
}

function detectLanguage(request: Request): Language {
  const savedLanguage = getSavedLanguage(request);

  if (savedLanguage && isLanguageSupported(savedLanguage)) {
    return savedLanguage;
  }

  const negotiator = new Negotiator({
    headers: {
      'accept-language': request.headers.get('accept-language') ?? '',
    },
  });

  const language = negotiator.language(supportedLanguages);

  return language as Language;
}

function getLocalizedDestination(request: Request, language: Language): URL {
  const destination = new URL(request.url);
  const pagePath = destination.pathname.replace(/\/$/, '');
  destination.pathname = `/localized/${language}${pagePath}/`;

  return destination;
}

export default function middleware(request: Request) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return next();
  }

  const detectedLanguage = detectLanguage(request);
  const language = isLanguageSupported(detectedLanguage) ? detectedLanguage : defaultLanguage;
  const destination = getLocalizedDestination(request, language);

  return rewrite(destination);
}
