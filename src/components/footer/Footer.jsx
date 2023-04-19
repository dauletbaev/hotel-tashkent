import "./footer.scss";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WhereToVoteOutlinedIcon from "@mui/icons-material/WhereToVoteOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Link } from "react-router-dom";
import TelegramIcon from "@mui/icons-material/Telegram";

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
                <PhoneEnabledOutlinedIcon className="icon" />
              </span>
              +99893 772-71-66
            </div>
            <div className="item">
              <span className="icon-cover">
                <EmailOutlinedIcon className="icon" />
              </span>
              xabibullayevmm@gmail.com
            </div>
            <div className="item">
              <div className="icon-cover">
                <WhereToVoteOutlinedIcon className="icon" />
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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Our rooms</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
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
                <TelegramIcon className="icon" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="cover">
          <span>© 2023 TashkenHotel</span>
          <div>Created by BIZLER GROUP LLC (998 93) 772-71-66</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
