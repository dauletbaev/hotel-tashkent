"use client";
import { useEffect, useState } from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import style from "../styles/ImageSlider.module.scss";

interface Props {
  slides: {
    url: string;
    title: string;
  }[];
}

function ImageSlider({ slides }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [iconPosition, setIconPosition] = useState(false);

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

  console.log(slides[0].title);
  return (
    <div
      className={style.imageSlider}
      style={
        slides[0].title === "single"
          ? {
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "100%",
            }
          : { backgroundImage: `url(${slides[currentIndex].url})` }
      }
      onMouseEnter={(e) => setIconPosition(true)}
      onMouseLeave={(e) => setIconPosition(false)}
    >
      <div className={style.container}>
        {slides[0].title !== "single" && (
          <>
            <h1>{slides[currentIndex].title}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              vitae expedita voluptatum quis laborum nobis sit, ab aperiam sequi
              odio voluptates veritatis.
            </p>
            <button>DISCOVER MORE</button>
          </>
        )}
        <div
          className={
            iconPosition ? `${style.left} ${style.leftActive}` : style.left
          }
          onClick={goToPrevious}
        >
          <IconChevronLeft className={style.slideIcon} />
        </div>
        <div
          className={
            iconPosition ? `${style.right} ${style.rightActive}` : style.right
          }
          onClick={goToNext}
        >
          <IconChevronRight className={style.slideIcon} />
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
