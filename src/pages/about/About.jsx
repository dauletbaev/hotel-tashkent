import "./about.scss";
import AboutUs from "../../components/about-us/AboutUs";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

import Footer from "../../components/footer/Footer";
import AboutFeature from "../../components/about-feature/AboutFeature";

function About() {
  return (
    <div className="about">
      <Header />
      <Navbar />
      <div className="top">
        <h1>
          All of our accommodation options comprise luxury amenities such as tea
          & coffee makers, minibars
        </h1>
      </div>
      <AboutUs page={"about"} />
      <AboutFeature />
      <Footer />
    </div>
  );
}

export default About;
