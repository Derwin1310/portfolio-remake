import type { Locale } from "../data/portfolio";


export const locales = ['en', 'es'] as const satisfies readonly Locale[];
export const defaultLocale = 'en' satisfies Locale;

export const getOppositeLocale = (locale: Locale): Locale =>
  locale === 'en' ? 'es' : 'en';

export const getLocaleHomePath = (locale: Locale) =>
  locale === defaultLocale ? '/' : `/${locale}/`;

export const getLanguageToggleLabel = (locale: Locale) =>
  getOppositeLocale(locale).toUpperCase();
