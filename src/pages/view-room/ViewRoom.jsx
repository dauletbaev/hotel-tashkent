import "./viewRoom.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Room from "../../components/room/Room";
import SingleRoom from "../../components/single-room/SingleRoom";

function ViewRoom() {
  return (
    <div className="view-room">
      <Header />
      <Navbar />
      <div className="top">
        <h1>
          First impression are important, but last impression we leave with
          customer we leave the most lasting impression.
        </h1>
      </div>

      <SingleRoom />

      <Room page={"view"} />
      <Footer />
    </div>
  );
}

export default ViewRoom;
