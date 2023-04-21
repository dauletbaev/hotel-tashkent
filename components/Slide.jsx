// import './slide.scss'
import Image from "next/image";
import { IconStar } from "@tabler/icons-react";
import style from "../styles/Slide.module.scss";

function Slide() {
  return (
    <div className={style.slide}>
      <div className={style.container}>
        <div className={style.title}>
          <span>Testimonial</span>
          <h1>What Our Clients Says</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className={style.slideContainer}>
          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                <Image
                  src="/images/testi-avatar-1.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                />

                <div>
                  <h2>Jina Nilson</h2>
                  <span>Client</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                <Image
                  src="/images/testi-avatar-1.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                />
                <div>
                  <h2>Jina Nilson</h2>
                  <span>Client</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                height={250}
                width={200}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className={style.slideItem}>
            <div className={style.top}>
              <div className={style.left}>
                <Image
                  src="/images/testi-avatar-1.png"
                  width={200}
                  height={250}
                  alt=""
                  className={style.img1}
                />
                <div>
                  <h2>Jina Nilson</h2>
                  <span>Client</span>
                </div>
              </div>
              <Image
                src="/images/testi-quote.png"
                width={200}
                height={250}
                alt=""
                className={style.img2}
              />
            </div>
            <div className={style.stars}>
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
              <IconStar className={style.icon} />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
