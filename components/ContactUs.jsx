import {
  IconMapPin,
  IconClockHour3,
  IconMailOpened,
  IconPhone,
} from "@tabler/icons-react";
import style from "../styles/CocntactUs.module.scss";

function ContactUs() {
  return (
    <div className={style.contactUs}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Contact Us</span>
          <h1>Easy to find</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className={style.items}>
          <div className={style.left}>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconMapPin className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>Address</h2>
                <p>1247/Plot No. 39, 15th, Nukus, Karakalpakstan</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconClockHour3 className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>Working Hours</h2>
                <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconMailOpened className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>Message Us</h2>
                <p>support@example.com info@example.com</p>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.iconWrapper}>
                <IconPhone className={style.icon} />
              </div>
              <div className={style.desc}>
                <h2>Phone</h2>
                <p>+998 93 772-71-66</p>
              </div>
            </div>
          </div>

          <div className={style.right}>
            <div className={style.wrapper}>
              <h2>Get In Touch</h2>
              <form>
                <div className={style.input}>
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className={style.input}>
                  <input type="text" placeholder="Phone No." />
                  <input type="email" placeholder="Email" />
                </div>

                <textarea placeholder="Write comments" />
                <button>SUBMIT NOW</button>
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
