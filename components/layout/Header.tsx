import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import {
  IconClockHour4,
  IconPhone,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
} from "@tabler/icons-react";
import style from "../../styles/Header.module.scss";

const TEL = "+998937727166";

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
        </div>
      </div>
    </div>
  );
}

export default Header;
