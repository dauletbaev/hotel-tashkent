import Room from "~/components/Room";
import style from "../styles/SingleRoom.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "~/components/ImageSlider";
import useTranslation from "next-translate/useTranslation";

export default function About({}) {
  const { t } = useTranslation("common");

  const slides = [
    {
      url: "/images/single-1.jpg",
      title: "single",
    },
    {
      url: "/images/single-2.jpg",
      title: "single",
    },
  ];

  return (
    <div className={style.single}>
      <div className={style.top}>
        <h1>{t("single_room_slider_title_1")}</h1>
        <h1>{t("single_room_slider_title_2")}</h1>
      </div>

      <ul className={style.features}>
        <li>{t("single_room_feature_1")}</li>
        <li>
          {t("single_room_feature_2")}
          <sup>2</sup>
        </li>
        <li>{t("single_room_feature_3")}</li>
        <li>{t("single_room_feature_4")}</li>
      </ul>

      <div className={style.bookThis}>
        <Image src="/images/room-1.png" height={300} width={300} alt="" />
        <div className="right">
          <span>{t("single_room_sub_title")}</span>
          <h2>{t("single_room_title")}</h2>
          <p>{t("single_room_desc")}</p>
          <Link href="/book-now">{t("single_room_book_now")}</Link>
        </div>
      </div>

      <ImageSlider slides={slides} page="single-room" />

      <Room page="single" />
    </div>
  );
}
