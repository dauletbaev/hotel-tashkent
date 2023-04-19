import "./header.scss";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import PhoneEnabledOutlinedIcon from "@mui/icons-material/PhoneEnabledOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="info">
          <div>
            <AccessTimeOutlinedIcon className="info-icon" />{" "}
            <span>Mon-Sat 9:00 - 19:00</span>
          </div>
          <div>
            <PhoneEnabledOutlinedIcon className="info-icon" />{" "}
            <span>+99893 772-71-66</span>
          </div>
        </div>
        <div className="social">
          <FacebookIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
          <TelegramIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
