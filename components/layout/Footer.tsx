import Link from 'next/link'
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandTelegram,
  IconBrandInstagram,
  IconBrandFacebook,
} from '@tabler/icons-react'
import style from '../../styles/Footer.module.scss'

const year = new Date().getFullYear()

function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.logo}>
            <h2>TashkentHotel</h2>
            <span>LUXURY HOTEL</span>
          </div>
          <div className={style.items}>
            <div className={style.item}>
              <span className={style.iconCover}>
                <IconPhone className={style.icon} />
              </span>
              +99893 772-71-66
            </div>
            <div className={style.item}>
              <span className={style.iconCover}>
                <IconMail className={style.icon} />
              </span>
              contact@tashkenthotel.info
            </div>
            <div className={style.item}>
              <div className={style.iconCover}>
                <IconMapPin className={style.icon} />
              </div>
              <span>1247/Plot No. 39, 15th, Nukus, Karakalpakstan</span>
            </div>
          </div>
        </div>

        <div className={style.right}>
          <div className={style.links}>
            <h2>Our Links</h2>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Our rooms</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>
          {/* <div className={style.subscribe}>
            <h2>Subscribe To Our Newsletter</h2>
            <span>
              Subscribe our newsletter to get our latest update & News
            </span>
            <form className={style.input}>
              <input type="email" required />
              <button>
                <IconBrandTelegram className={style.icon} />
              </button>
            </form>
          </div> */}
        </div>

        <div>
          <h2 className="font-bold text-[20px] mb-[30px] max-md:my-4">
            We are in social media
          </h2>
          <div className="flex max-md:items-center max-md:justify-center flex-col gap-2">
            <Link
              href="https://f.me/21345"
              className="flex items-center gap-2"
              target="_blank"
              rel="noreferrer noopener"
            >
              <IconBrandFacebook />
              <span>Facebook</span>
            </Link>
            <Link
              href="https://instagram.com/21345"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer noopener"
            >
              <IconBrandInstagram />
              <span>Instagram</span>
            </Link>
            <Link
              href="https://t.me/21345"
              target="_blank"
              className="flex items-center gap-2"
              rel="noreferrer noopener"
            >
              <IconBrandTelegram />
              <span>Telegram</span>
            </Link>
          </div>
        </div>
      </div>

      <div className={style.copyright}>
        <div className={style.cover}>
          <span>© {year} TashkenHotel</span>
          <Link
            href="https://bizler.group?utm_source=tashkenthotel&utm_medium=footer&utm_campaign=footer"
            target="_blank"
            rel="noreferrer noopener"
          >
            Developed by BIZLER GROUP
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
