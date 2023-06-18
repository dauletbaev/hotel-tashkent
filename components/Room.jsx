import Link from "next/link";
import Image from "next/image";
import {
  IconWifi,
  IconCoffee,
  IconToolsKitchen2,
  IconHotelService,
} from "@tabler/icons-react";
import style from "../styles/Room.module.scss";
import useTranslation from "next-translate/useTranslation";

function Room({ page }) {
  const { t } = useTranslation("common");

  return (
    <div className={style.room}>
      <div className={style.container}>
        <div className={style.title}>
          {page !== "single" && <span>{t("menu_rooms")}</span>}
          <h1>{page === "single" ? t("room_title_1") : t("room_title_2")}</h1>
          {page !== "single" && <p>{t("room_desc")}</p>}
        </div>

        <div className={style.items}>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/pictures/ADC_0009-min.jpg"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/single-room">{t("room_view")}</Link>
                    <Link href="/book-now">{t("room_book_now")}</Link>
                  </div>
                  <h2>{t("room_1_title")}</h2>
                  <p>{t("room_1_desc")}</p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/pictures/ADC_0003-min.jpg"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/single-room">{t("room_view")}</Link>
                    <Link href="/book-now">{t("room_book_now")}</Link>
                  </div>
                  <h2>{t("room_2_title")}</h2>
                  <p>{t("room_2_desc")}</p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/pictures/ADC_0017-min.jpg"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/single-room">{t("room_view")}</Link>
                    <Link href="/book-now">{t("room_book_now")}</Link>
                  </div>
                  <h2>{t("room_3_title")}</h2>
                  <p>{t("room_3_desc")}</p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/2-person.jpg"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/single-room">{t("room_view")}</Link>
                    <Link href="/book-now">{t("room_book_now")}</Link>
                  </div>
                  <h2>{t("room_4_title")}</h2>
                  <p>{t("room_4_desc")}</p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/3-person.jpg"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <div className={style.bottom}>
                  <div className={style.buttons}>
                    <Link href="/single-room">{t("room_view")}</Link>
                    <Link href="/book-now">{t("room_book_now")}</Link>
                  </div>
                  <h2>{t("room_5_title")}</h2>
                  <p>{t("room_5_desc")}</p>
                  <div className={style.icons}>
                    <IconWifi className={style.icon} />
                    <IconHotelService className={style.icon} />
                    <IconCoffee className={style.icon} />
                    <IconToolsKitchen2 className={style.icon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
