import { useState, useEffect } from "react";
import "./navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuClick, setIsMenuClick] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(isMenuClick);

  return (
    <div className={scrollPosition > 150 ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <h2>TashkentHotel</h2>
          <span>LUXURY HOTEL</span>
        </div>
        <div className={isMenuClick ? "nav-items" : "nav-items"}>
          <ul className={isMenuClick ? "active" : ""}>
            {isMenuClick && (
              <>
                <div className="top">
                  <div className="logo">
                    <h2>TashkentHotel</h2>
                    <span>LUXURY HOTEL</span>
                  </div>
                  <div className="close">
                    <CloseIcon
                      onClick={() => setIsMenuClick(false)}
                      className="icon"
                    />
                  </div>
                </div>
                <hr />
              </>
            )}
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/rooms">Our Rooms</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {isMenuClick && <div className="bottom"></div>}
          </ul>
        </div>
        <button className="read-more">Book Now</button>
        <div className="menu">
          <MenuIcon className="icon" onClick={() => setIsMenuClick(true)} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
