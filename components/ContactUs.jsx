import {
  IconMapPin,
  IconClockHour3,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";
import style from "../styles/CocntactUs.module.scss";
import useTranslation from "next-translate/useTranslation";

function ContactUs() {
  const { t } = useTranslation("common");

  return (
    <div className={style.contactUs}>
      <div className={style.container}>
        <div className={style.title}>
          <span>{t("contact_sub_title")}</span>
          <h1>{t("contact_title")}</h1>
          {/* <p>{t("contact_desc")}</p> */}
        </div>
        <div className={style.items}>
          <div className={style.left}>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconMapPin className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>{t("contact_address")}</h2>
                <p>{t("hotel_address")}</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconClockHour3 className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>{t("contact_working_hours")}</h2>
                <p>{t("working_hours")}</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconMailOpened className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>{t("contact_message_us")}</h2>
                <p>{t("email_address")}</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconPhone className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>{t("contact_phone")}</h2>
                <p>{t("phone_number_1")}</p>
                <p>{t("phone_number_2")}</p>
              </div>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.wrapper}>
              <h2>{t("contact_form_title")}</h2>
              <form>
                <div className={style.input}>
                  <input
                    type="text"
                    placeholder={t("contact_form_first_name")}
                  />
                  <input
                    type="text"
                    placeholder={t("contact_form_last_name")}
                  />
                </div>
                <div className={style.input}>
                  <input
                    type="text"
                    placeholder={t("contact_form_phone_number")}
                  />
                  <input type="email" placeholder={t("contact_form_email")} />
                </div>

                <textarea placeholder={t("contact_form_comment")} />
                <button>{t("contact_form_submit")}</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className={style.map}>
        <div className={style.mapWrapper}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.1995892051941!2d59.605315104680166!3d42.45749677140515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a181c63f519%3A0x5fc8cd524103c600!2sToshkent!5e0!3m2!1suz!2s!4v1681757500774!5m2!1suz!2s"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
