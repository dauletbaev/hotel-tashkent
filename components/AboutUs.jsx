import { IconCheck } from '@tabler/icons-react'
import Image from 'next/image'
import style from '../styles/AboutUs.module.scss'
import useTranslation from 'next-translate/useTranslation'

function AboutUs({ page }) {
  const { t } = useTranslation('common')

  return (
    <div className={style.aboutUs}>
      <div className={style.container}>
        <div className={style.left}>
          <Image
            src="/pictures/ADC_0174-min.jpg"
            height={600}
            width={500}
            className={style.img1}
            alt=""
          />

          <Image
            src="/pictures/ADC_0003-min.jpg"
            height={300}
            width={350}
            className={style.img2}
            alt=""
          />
        </div>

        <div className={style.right}>
          <span>{t('about_us_sub_title')}</span>
          <h1>{t('about_us_title')}</h1>
          <p>{t('about_us_desc_1')}</p>
          <p>{t('about_us_desc_2')}</p>

          <ul>
            <li>
              <IconCheck className={style.icon} />
              {t('about_us_tick_1')}
            </li>
            <li>
              <IconCheck className={style.icon} />
              {t('about_us_tick_2')}
            </li>
            <li>
              <IconCheck className={style.icon} />
              {t('about_us_tick_3')}
            </li>
          </ul>

          {page === 'home' && <button>{t('about_us_discover_more')}</button>}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
