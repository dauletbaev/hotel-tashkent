import { useState, useEffect, useCallback } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import style from "../../styles/Navbar.module.scss";
import useTranslation from "next-translate/useTranslation";
import {
  IconClockHour4,
  IconPhone,
  IconMail,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import Image from "next/image";
import { locales } from "~/i18n";

function Navbar() {
  const { t, lang } = useTranslation("common");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuClick, setIsMenuClick] = useState(false);

  const closeMenu = useCallback(() => {
    setIsMenuClick(false);
  }, []);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  return (
    <div
      className={
        scrollPosition > 150 ? `${style.navbar} ${style.active}` : style.navbar
      }
    >
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/">
            <div className={style.text}>
              <h2>TashkentHotel</h2>
              <span>LUXURY HOTEL</span>
            </div>
          </Link>
        </div>
        <ul className={isMenuClick ? style.active : ''}>
          <div className={style.top}>
            <div className={style.logo}>
              <Link href="/">
                <div className={style.text}>
                  <h2>TashkentHotel</h2>
                  <span>LUXURY HOTEL</span>
                </div>
              </Link>
            </div>
            <div className={style.close} onClick={closeMenu}>
              <IconX className={style.icon} />
            </div>
          </div>

          <li>
            <Link href="/">{t("menu_home")}</Link>
          </li>
          <li>
            <Link href="/rooms">{t("menu_rooms")}</Link>
          </li>
          <li>
            <Link href="/about">{t("menu_about")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("menu_contact")}</Link>
          </li>
          <li className={style.lang}>
            {locales.map((lng) => {
              if (lng === lang) return null;

              return (
                <Link href="/" locale={lng} key={lng}>
                  <Image
                    src={`/images/${lng}.webp`}
                    width={20}
                    height={20}
                    alt={`${lang}`}
                  />
                </Link>
              )
            })}
          </li>

          <div className={style.bottom}>
            <h2>{t("menu_contact_info")}</h2>
            <div className={style.contact}>
              <div>
                <span className={style.iconWrapper}>
                  <IconClockHour4 className={style.icon} size={15} />
                </span>
                <span className={style.text}>{t('working_hours')}</span>
              </div>
              <div>
                <span className={style.iconWrapper}>
                  <IconMail className={style.icon} size={15} />
                </span>
                <span className={style.text}>{t("email_address")}</span>
              </div>
              <Link
                href={`tel:${t("phone_number_1")}`}
                className="ml-5 flex gap-1"
              >
                <span className={style.iconWrapper}>
                  <IconPhone className={style.icon} size={15} />
                </span>
                <div className="flex flex-col">
                  <span className={style.text}>{t("phone_number_1")}</span>
                  <span className={style.text}>{t("phone_number_2")}</span>
                </div>
              </Link>
            </div>
            <div className={style.links}>
              <div className={style.iconWrapper}>
                <IconBrandTelegram size={15} />
              </div>
              <div className={style.iconWrapper}>
                <IconBrandInstagram size={15} />
              </div>
              <div className={style.iconWrapper}>
                <IconBrandFacebook size={15} />
              </div>
            </div>
          </div>
        </ul>

        <div></div>

        <div className={style.menu} onClick={() => setIsMenuClick(true)}>
          <IconMenu2 className={style.icon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
