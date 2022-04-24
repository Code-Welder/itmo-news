import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { useRouter } from 'next/router';

import dateStringFormatter from 'lib/utils/dateStringFormatter';
import style from 'styles/newsCard.module.scss'

type Props = {
  id: number,
  imgSrc: string,
  date: string,
  title: string
}

const NewsCard = (props: Props) => {
  const { locale } = useRouter()
  const { id, imgSrc, date, title } = props
  const localeForDateFormater = locale === 'ru' ? 'ru' : 'en'

  return (
    <li className={style.wrapper}>
      <Link href={`/news/${id}`} passHref>

        <a className={style.link}>

          <article className={style.inner} title={title}>
            <div className={style.imgWrapper}>
              <Image src={imgSrc} alt={title} layout="fill" objectFit="cover" quality={100}/>
            </div>
            <div className={style.text}>
              <time className={style.date} dateTime={date}>
                {dateStringFormatter(date, localeForDateFormater)}
              </time>
              <h3 className={style.title}>{title}</h3>
            </div>
          </article>

        </a>

      </Link>
    </li>
  );
};

export default NewsCard;