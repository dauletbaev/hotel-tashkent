import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import style from "../styles/AboutUs.module.scss";

function AboutUs({ page }) {
  return (
    <div className={style.aboutUs}>
      <div className={style.container}>
        <div className={style.left}>
          <Image
            src="/images/about-us-1.png"
            height={600}
            width={500}
            className={style.img1}
            alt=""
          />

          <Image
            src="/images/about-us-2.png"
            height={300}
            width={350}
            className={style.img2}
            alt=""
          />
        </div>

        <div className={style.right}>
          <span>About Us</span>
          <h1>Most Safe & Rated Hotel In Nukus.</h1>
          <p>
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque.
            Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida
            nibh, quis posuere felis. In commodo mi lectus, Integer ligula
            lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
          </p>
          <p>
            Cras finibus laoreet felis et hendrerit. Integer ligula lorem,
            finibus vitae lorem at, egestas consectetur urna. Integer id
            ultricies elit. Maecenas sodales nibh, quis posuere felis. In
            commodo mi lectus venenatis metus eget fringilla. Suspendisse varius
            ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis
            auctor lectus.
          </p>

          <ul>
            <li>
              <IconCheck className={style.icon} />
              24 Month / 24,000km Nationwide Warranty monotone
            </li>
            <li>
              <IconCheck className={style.icon} />
              Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.
            </li>
            <li>
              <IconCheck className={style.icon} />
              Customer Rewards Program and excellent technology
            </li>
          </ul>

          {page === "home" && <button>DISCOVER MORE</button>}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
