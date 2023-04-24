import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { IconClockHour4, IconPhone } from "@tabler/icons-react";
import style from "../../styles/Header.module.scss";
import Image from "next/image";
import { locales } from "~/i18n.js";

const TEL = "(+998 61) 224-02-00; (+998 88) 355-02-00";

function Header() {
  const { t, lang } = useTranslation("common");

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className="flex">
          <div className="flex gap-1">
            <IconClockHour4 />
            <span>{t("working_hours")}</span>
          </div>
          <Link href={`tel:${TEL}`} className="ml-5 flex gap-1">
            <IconPhone />
            <span>{TEL}</span>
          </Link>
        </div>

        <div className="flex gap-2">
          {locales.map((lng) => {
            if (lng === lang) return null;

            return (
              <Link
                href="/"
                locale={lng}
                key={lng}
                className="flex items-center mr-2"
              >
                <Image
                  src={`/images/${lng}.webp`}
                  width={20}
                  height={20}
                  alt={`${lang}`}
                  className="mr-1"
                />
                {t(`language-name-${lng}`)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
