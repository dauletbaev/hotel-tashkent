// import './explore.scss'
import Link from "next/link";
import Image from "next/image";
import { IconArrowRight } from "@tabler/icons-react";
import style from "../styles/Explore.module.scss";

function Explore() {
  return (
    <div className={style.explore}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Explore</span>
          <h1>The Hotel</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>

        <div className={style.items}>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-1.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>Quality room</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>

                <Link href="/">
                  Read More <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-2.png"
                  height={250}
                  width={200}
                  alt="Quality Room"
                />
                <h2>Best Accommodation</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>

                <Link href="/">
                  Read More
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.row}>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-3.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>Restaurants & Bars</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>

                <Link href="/">
                  Read More
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
            <div className={style.item}>
              <div className={style.container}>
                <Image
                  src="/images/explore-4.png"
                  width={200}
                  height={250}
                  alt="Quality Room"
                />
                <h2>Special Offers</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>

                <Link href="/">
                  Read More
                  <IconArrowRight className={style.icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
