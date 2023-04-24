import Image from "next/image";
import style from "../styles/Tour.module.scss";
import useTranslation from "next-translate/useTranslation";

function Tour() {
  const { t } = useTranslation("common");

  return (
    <div className={style.tour}>
      <div className={style.left}>
        <Image src="/images/tour.png" width={200} height={250} alt="" />
      </div>
      <div className={style.right}>
        <span>{t("tour_sub_title")}</span>
        <h1>{t("tour_title")}</h1>
        <p>{t("tour_desc_1")}</p>
        <p>{t("tour_desc_2")}</p>
      </div>
    </div>
  );
}

export default Tour;
