import ContactUs from "~/components/ContactUs";
import style from "../styles/Contact.module.scss";
import useTranslation from "next-translate/useTranslation";

export default function Contact() {
  const { t } = useTranslation("common");

  return (
    <div className={style.contact}>
      <div className={style.top}>
        <h1>{t("contact_slider_title")}</h1>
      </div>

      <ContactUs />
    </div>
  );
}
