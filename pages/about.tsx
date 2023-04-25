import AboutUs from "~/components/AboutUs";
import AboutFeature from "~/components/AboutFeature";
import style from "../styles/About.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const { t } = useTranslation("common");

  return (
    <div className={style.about}>
      <div className={style.top}>
        <h1>{t("about_slider_title")}</h1>
      </div>
      <AboutUs page="about" />
      <AboutFeature />
    </div>
  );
}
