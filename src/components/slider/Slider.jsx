import "./slider.scss";
import ImageSlider from "../image-slider/ImageSlider";

const slides = [
  {
    url: "https://hotel-tashkent.netlify.app/images/slider-bg-1.png",
    title: "Enjoy A Luxuary Experience",
  },
  {
    url: "https://hotel-tashkent.netlify.app/images/slider-bg-2.png",
    title: "Enjoy A Luxuary Experience",
  },
];

function Slider() {
  return (
    <div className="slider">
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Slider;
