const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  nl: () => import('../dictionaries/nl.json').then((module) => module.default),
}

export type Locale = 'en' | 'nl'

export const getDictionary = async (locale: Locale) => {
  // Safe fallback if an unsupported locale is passed
  const resolvedLocale = (locale === 'nl' || locale === 'en') ? locale : 'en';
  return dictionaries[resolvedLocale]();
}
