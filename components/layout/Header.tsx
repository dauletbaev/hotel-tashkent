import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import {
  IconPhone,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
  IconClockHour4,
} from '@tabler/icons-react'
import { locales } from '~/i18n.js'

const TEL = '+998937727166'

function Header() {
  const { t, lang } = useTranslation('common')

  return (
    <div className="bg-[#644222]">
      <div className="w-full min-h-[4rem] px-20 flex items-center justify-between text-[#fff]">
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
          {locales.map((lng) => {
            if (lng === lang) return null

            return (
              <Link href="/" locale={lng} key={lng}>
                {t(`language-name-${lng}`)}
              </Link>
            )
          })}
        </div>
        {/* <div className="flex gap-2">
          <Link
            href="https://f.me/21345"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandFacebook />
          </Link>
          <Link
            href="https://instagram.com/21345"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandInstagram />
          </Link>
          <Link
            href="https://t.me/21345"
            target="_blank"
            rel="noreferrer noopener"
          >
            <IconBrandTelegram />
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default Header
