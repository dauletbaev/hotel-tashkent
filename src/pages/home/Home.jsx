import AboutUs from "../../components/about-us/AboutUs";
import Explore from "../../components/explore/Explore";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import New from "../../components/new/New";
import Room from "../../components/room/Room";
import Slide from "../../components/slide/Slide";
import Slider from "../../components/slider/Slider";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Slider />
      <AboutUs />
      <Explore />
      <Room />
      <Slide />
      <New />
      <Footer />
    </div>
  );
}

export default Home;
