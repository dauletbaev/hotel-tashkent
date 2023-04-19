import { Link } from "react-router-dom";
import "./room.scss";
import WifiIcon from "@mui/icons-material/Wifi";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";
import FlatwareOutlinedIcon from "@mui/icons-material/FlatwareOutlined";

function Room({ page }) {
  return (
    <div className="room">
      <div className="container">
        <div className="title">
          {page !== "view" && <span>Room</span>}
          <h1>{page === "view" ? "Other rooms" : "Rooms & Suites"}</h1>
          {page !== "view" && (
            <p>
              Proin consectetur non dolor vitae pulvinar. Pellentesque
              sollicitudin dolor eget neque viverra, sed interdum metus
              interdum. Cras lobortis pulvinar dolor, sit amet ullamcorper dolor
              iaculis vel
            </p>
          )}
        </div>

        <div className="items">
          <div className="item">
            <div className="container">
              <img src="/images/room-1.png" alt="Quality Room" />
              <div className="bottom">
                <div className="buttons">
                  <Link to="/view-room">View</Link>
                  <Link to="/">Book Now</Link>
                </div>
                <h2>Delux Double Room</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>
                <div className="icons">
                  <WifiIcon className="icon" />
                  <BedOutlinedIcon className="icon" />
                  <EmojiFoodBeverageOutlinedIcon className="icon" />
                  <FlatwareOutlinedIcon className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="container">
              <img src="/images/room-2.png" alt="Quality Room" />
              <div className="bottom">
                <div className="buttons">
                  <Link to="/">View</Link>
                  <Link to="/">Book Now</Link>
                </div>
                <h2>Super Balcony Double Room</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>
                <div className="icons">
                  <WifiIcon className="icon" />
                  <BedOutlinedIcon className="icon" />
                  <EmojiFoodBeverageOutlinedIcon className="icon" />
                  <FlatwareOutlinedIcon className="icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="item">
            <div className="container">
              <img src="/images/room-3.png" alt="Quality Room" />
              <div className="bottom">
                <div className="buttons">
                  <Link to="/">View</Link>
                  <Link to="/">Book Now</Link>
                </div>
                <h2>Superior Double Room</h2>
                <p>
                  Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                  auctor eget nunc sit amet.
                </p>
                <div className="icons">
                  <WifiIcon className="icon" />
                  <BedOutlinedIcon className="icon" />
                  <EmojiFoodBeverageOutlinedIcon className="icon" />
                  <FlatwareOutlinedIcon className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Room;
