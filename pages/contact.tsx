import ContactUs from "~/components/ContactUs";
import style from "../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={style.contact}>
      <div className={style.top}>
        <h1>
          Great choice for a relaxing vacation for families with children or a
          group of friends
        </h1>
      </div>

      <ContactUs />
    </div>
  );
}
