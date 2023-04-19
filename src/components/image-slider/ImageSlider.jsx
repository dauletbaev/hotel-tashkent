import { useEffect, useState } from "react";
import "./imageSlider.scss";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconPosition, setIconPosition] = useState();

  const goToPrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToNext = () => {
    if (currentIndex === 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex === 0) {
        setCurrentIndex(1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div
      className="image-slider"
      style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      onMouseEnter={(e) => setIconPosition(true)}
      onMouseLeave={(e) => setIconPosition(false)}
    >
      <div className="container">
        <h1>{slides[currentIndex].title}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vitae
          expedita voluptatum quis laborum nobis sit, ab aperiam sequi odio
          voluptates veritatis.
        </p>
        <button>DISCOVER MORE</button>
        <div
          className={iconPosition ? "left left-active" : "left"}
          onClick={goToPrevious}
        >
          <ChevronLeftIcon className="slide-icon" />
        </div>
        <div
          className={iconPosition ? "right right-active" : "right"}
          onClick={goToNext}
        >
          <ChevronRightIcon className="slide-icon" />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
