const NEWS_URL = 'https://news.itmo.ru/api/news/list/?ver=2.0&lead=1&per_page=9'

export async function getNewsList(lang: 'ru' | 'en' = 'ru') {
  const langID = {
    ru: 1,
    en: 2
  }

  const res = await fetch(NEWS_URL + `&language_id=${langID[lang]}`)
  const data = await res.json()  

  return data
}