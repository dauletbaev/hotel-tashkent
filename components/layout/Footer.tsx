import Link from 'next/link'
import {
  IconMapPin,
  IconMail,
  IconPhone,
  IconBrandTelegram,
} from '@tabler/icons-react'

const year = new Date().getFullYear()

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="left">
          <div className="logo">
            <h2>TashkentHotel</h2>
            <span>LUXURY HOTEL</span>
          </div>
          <div className="items">
            <div className="item">
              <span className="icon-cover">
                <IconPhone className="icon" />
              </span>
              +99893 772-71-66
            </div>
            <div className="item">
              <span className="icon-cover">
                <IconMail className="icon" />
              </span>
              contact@tashkenthotel.info
            </div>
            <div className="item">
              <div className="icon-cover">
                <IconMapPin className="icon" />
              </div>
              1247/Plot No. 39, 15th, Nukus, Karakalpakstan
            </div>
          </div>
        </div>

        <div className="right">
          <div className="links">
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
          <div className="subscribe">
            <h2>Subscribe To Our Newsletter</h2>
            <span>
              Subscribe our newsletter to get our latest update & News
            </span>
            <form className="input">
              <input type="email" required />
              <button>
                <IconBrandTelegram className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="cover">
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
