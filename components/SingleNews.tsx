import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useFetchNewsQuery } from 'services/NewsService';
import { INewsItem } from 'models/INewsItem';

const SingleNews = () => {
  const [content, setContent] = useState<INewsItem>(null)
  const [isContentAvalible, setIsContentAvalible] = useState(true)
  const { locale, query } = useRouter()
  const { id } = query
  const { data: newsList, isLoading } = useFetchNewsQuery(locale)

  useEffect(() => {
    if (!isLoading) {
      const [newsData] = newsList.filter(news => news.id === +id)
      if (newsData) {
        setContent(newsData)
        setIsContentAvalible(true)
      } else {
        setIsContentAvalible(false)
      }
    }     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newsList])

  if (!isContentAvalible && !isLoading) {
    return (
      <div className='container'>
        <p>
          {
            locale === 'ru'
            ? 'Перевод отсутствует'
            : 'There is no translation'
          }
        </p>
      </div>
    )
  }

  return (
    <div className='container'>
      {
        content &&

        <article className='wrapper'>
          <section className='content'>
            <div className='img'>
              <Image src={content.image_big} layout="fill" objectFit="cover" alt={content.title} priority />
            </div>
            <div className='text-wrapper'>
              <h1 className='title'>{content.title}</h1>
              <p className='text' dangerouslySetInnerHTML={{ __html: content.lead }}></p>
            </div>
          </section>
        </article>
      }

      <style jsx>{`
        .wrapper {
          margin: 40px 0;
        }

        .img {
          position: relative;
          padding-bottom: 55%;
          margin-bottom: 30px;
        }

        .title {
          margin-bottom: 20px;
        }

        @media screen and (min-width: 767.98px) {
          .content {
            display: flex;
            flex-direction: row;
          }

          .img {
            width: 40%;
            padding-bottom: 25%;
            margin-right: 30px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SingleNews;