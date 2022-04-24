const monthLocales = {
  ru: [
    'Января', 
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]
}

/**
 * @param date - string to convert in Date object
 * @param locale - one of `[ru, en]` - default `ru`
 * @returns 
 */
export default function dateStringFormatter(date: string, locale: 'ru' | 'en' = 'ru'): string {
  const dateObject = new Date(date)

  if (isNaN(dateObject.getDate())) {
    throw new TypeError('@param - date must be a valid string to convert in Date object')
  }

  return (
    `${dateObject.getDay()} ` +
    `${monthLocales[locale][dateObject.getMonth()]} ` +
    `${dateObject.getFullYear()}`
    )
}