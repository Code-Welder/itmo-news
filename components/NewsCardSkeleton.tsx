import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import style from 'styles/newsCard.module.scss'

const NewsCardSkeleton = () => {
  return (
    <li className={style.wrapper}>

      <div className={style.link}>
        <div className={style.inner}>
          <div className={style.imgWrapper}>
            <Skeleton style={{position: 'absolute', inset: 0}} />
          </div>
          <div className={style.text}>
            <Skeleton className={style.date} />
            <Skeleton className={style.title} count={2} />
          </div>
        </div>
      </div>

    </li>
  )
}

export default NewsCardSkeleton