"use client";
import { useState, useEffect, useCallback } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "../../styles/Navbar.module.scss";

function Navbar() {
  const pathname = usePathname();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuClick, setIsMenuClick] = useState(false);

  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  console.log(scrollPosition);

  return (
    <div
      className={
        scrollPosition > 150 ? `${style.navbar} ${style.active}` : style.navbar
      }
    >
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/">
            <div className={style.text}>
              <h2>TashkentHotel</h2>
              <span>LUXURY HOTEL</span>
            </div>
          </Link>
        </div>
        <ul className={isMenuClick ? style.active : ""}>
          <div className={style.top}>
            <div className={style.logo}>
              <Link href="/">
                <div className={style.text}>
                  <h2>TashkentHotel</h2>
                  <span>LUXURY HOTEL</span>
                </div>
              </Link>
            </div>
            <div className={style.close} onClick={() => setIsMenuClick(false)}>
              <IconX className="icon" />
            </div>
          </div>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/rooms">Our Rooms</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        <Link href="/book-now" className={style.bookNow}>
          Book Now
        </Link>
        <div className={style.menu} onClick={() => setIsMenuClick(true)}>
          <IconMenu2 className={style.icon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
