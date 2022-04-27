import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { INewsItem } from 'models/INewsItem';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://news.itmo.ru/api/news/list/' }),
  endpoints: (builder) => ({
    fetchNews: builder.query<any, string>({
      query: (lang: 'ru' | 'en' = 'ru') => ({
        url: `/`,  
        params: {
          ver: '2.0',
          lead: 1,
          per_page: 9,
          language_id: lang === 'ru' ? 1 : 2,
        } 
      }),
      transformResponse: (response: { news: INewsItem[]} ) => response.news
    }),
  }),
});

export const { useFetchNewsQuery, usePrefetch, useLazyFetchNewsQuery } = newsApi
