import "./rooms.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Room from "../../components/room/Room";
import { Link } from "react-router-dom";
import { useState } from "react";
import Tour from "../../components/tour/Tour";

function About() {
  const [roomType, setRoomType] = useState("standart-single");

  return (
    <div className="rooms">
      <Header />
      <Navbar />
      <div className="top">
        <h1>
          First impression are important, but last impression we leave with
          customer we leave the most lasting impression.
        </h1>
      </div>

      <Room />
      <Tour />
      <Footer />
    </div>
  );
}

export default About;
