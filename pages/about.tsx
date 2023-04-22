import AboutUs from "~/components/AboutUs";
import AboutFeature from "~/components/AboutFeature";
import style from "../styles/About.module.scss";

export default function About() {
  return (
    <div className={style.about}>
      <div className={style.top}>
        <h1>
          All of our accommodation options comprise luxury amenities such as tea
          & coffee makers, minibars
        </h1>
      </div>
      <AboutUs page="about" />
      <AboutFeature />
    </div>
  );
}
