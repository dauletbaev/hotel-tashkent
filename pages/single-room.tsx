import Room from "~/components/Room";
import style from "../styles/SingleRoom.module.scss";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from "~/components/ImageSlider";

export default function About({}) {
  const slides = [
    {
      url: "/images/single-1.jpg",
      title: "single",
    },
    {
      url: "/images/single-2.jpg",
      title: "single",
    },
  ];

  return (
    <div className={style.single}>
      <div className={style.top}>
        <h1>· Delux Double Room ·</h1>
        <h1> More than meets the eye </h1>
      </div>

      <ul className={style.features}>
        <li>Queen Size Bed</li>
        <li>
          22m<sup>2</sup>
        </li>
        <li>Free Wifi</li>
        <li>1 person</li>
      </ul>

      <div className={style.bookThis}>
        <Image src="/images/room-1.png" height={300} width={300} alt="" />
        <div className="right">
          <span>Luxury & Comfort</span>
          <h2>Tashkent Hotel facilities</h2>
          <p>
            Hotel offers – 8 Standard Single rooms Queen Size bed (1.60 x 2m),
            and also upper floors accessible by elevator, linen, wardrobe or
            closet, hand sanitizer, tea-coffee maker minibar, air conditioning,
            safety deposit box, soundproofing, iron and ironing facilities,
            heating, carpeted, laptop safe, electric kettle, tumble dryer, desk,
            seating area,Smart TV, telephone, satellite channels, cable
            channels, air purifiers installed, socket near the bed, clothes rack
            and also wake up call service.
          </p>
          <Link href="/book-now">Book Now</Link>
        </div>
      </div>

      <ImageSlider slides={slides} />

      <Room page="single" />
    </div>
  );
}
