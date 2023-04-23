import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { IconClockHour4, IconPhone } from '@tabler/icons-react'
import { locales } from '~/i18n.js'
import style from '../../styles/Header.module.scss'
import Image from 'next/image'

const TEL = '+998937727166'

function Header() {
  const { t, lang } = useTranslation('common')

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className="flex">
          <div className="flex gap-1">
            <IconClockHour4 />
            <span>{t('working_hours')}</span>
          </div>
          <Link href={`tel:${TEL}`} className="ml-5 flex gap-1">
            <IconPhone />
            <span>{TEL}</span>
          </Link>
        </div>
        <div className="flex gap-2">
          {locales.map((lng) => (
            <Link href="/" locale={lng} key={lng}>
              <Image
                src={`/images/${lng}.webp`}
                width={20}
                height={20}
                alt={`${lang}`}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
