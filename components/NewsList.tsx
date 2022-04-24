import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from "react";
import { getNewsList } from 'lib/api';
import NewsCard from 'components/NewsCard';
import NewsCardSkeleton from 'components/NewsCardSkeleton';

const localesOptions = {
  ru: {
    title: 'Новости и события'
  },
  en: {
    title: 'News and events'
  }
}

const fakeNewsList = new Array(9).fill(null)

const NewsList = () => {
  const { locale } = useRouter()
  const [newsList, setNewsList] = useState([])
  const [isLoading, setIsLoading] = useState(null)  

  useEffect(() => {
    setIsLoading(true)
    getNewsList(locale == 'ru' ? 'ru' : 'en')
      .then(d => {
        setNewsList(d.news)
        setIsLoading(false)
      })
  }, [locale])

  return (
    <div className='wrapper'>
      <h2 className='title'>{localesOptions[locale]['title']}</h2>
      <ul className='list'>
        {
          isLoading 
          ? fakeNewsList.map((news, i) => {
            return <NewsCardSkeleton key={i} />
          }) 

          : newsList.map(news => {
            return <NewsCard key={news.id} id={news.id} imgSrc={news.image_small} title={news.title} date={news.date} />
          })
        }
      </ul>

      <style jsx>{`
        .wrapper {
          padding: 40px 0 68px;
        }

        .title {
          font: 700 40px/1 'Muller', sans-serif;
          margin-bottom: 40px;
        }

        .list {
          display: grid;
          gap: 40px;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))
        }
      `}
      </style>
    </div>
  );
};

export default NewsList;