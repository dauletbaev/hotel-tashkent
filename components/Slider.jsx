import ImageSlider from "./ImageSlider";
import useTranslation from "next-translate/useTranslation";

function Slider() {
  const { t } = useTranslation("common");

  const slides = [
    {
      url: "/pictures/ADC_0165-min.jpg",
      title: t("home_slider_title_1"),
    },
    {
      url: "/pictures/ADC_0142-min.jpg",
      title: t("home_slider_title_2"),
    },
  ];

  return (
    <div className="slider">
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Slider;
