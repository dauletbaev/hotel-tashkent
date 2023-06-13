// import './slide.scss'
import Image from 'next/image'
import { IconStar } from '@tabler/icons-react'
import style from '../styles/Slide.module.scss'
import useTranslation from 'next-translate/useTranslation'

function Slide() {
  const { t } = useTranslation('common')

  return (
    <div className={style.slide}>
      <div className={style.container}>
        <div className={style.title}>
          <span>{t('testimonial_sub_title')}</span>
          <h1>{t('testimonial_title')}</h1>
          <p>{t('testimonial_desc')}</p>
        </div>
        <div className={style.slideContainer}>
          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                <div className={style.avatar}>S</div>
                {/* <Image
                  src="/images/testi-avatar-1.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                /> */}

                <div>
                  <h2>{t('testimonial_testi_1_name')}</h2>
                  <span>{t('testimonial_testi_1_type')}</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>{t('testimonial_testi_1_desc')}</p>
          </div>

          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                {/* <Image
                  src="/images/testi-avatar-2.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                /> */}
                <div className={style.avatar}>L</div>

                <div>
                  <h2>{t('testimonial_testi_2_name')}</h2>
                  <span>{t('testimonial_testi_2_type')}</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>{t('testimonial_testi_2_desc')}</p>
          </div>

          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                <div className={style.avatar}>M</div>

                {/* <Image
                  src="/images/testi-avatar-1.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                /> */}
                <div>
                  <h2>{t('testimonial_testi_3_name')}</h2>
                  <span>{t('testimonial_testi_3_type')}</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                width={200}
                height={250}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>{t('testimonial_testi_3_desc')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slide
