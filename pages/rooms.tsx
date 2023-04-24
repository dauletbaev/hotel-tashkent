import Room from "~/components/Room";
import Tour from "~/components/Tour";
import style from "../styles/Rooms.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Rooms() {
  const { t } = useTranslation("common");

  return (
    <div className={style.rooms}>
      <div className={style.top}>
        <h1>{t("room_slider_title")}</h1>
      </div>

      <Room page="room" />
      <Tour />
    </div>
  );
}
