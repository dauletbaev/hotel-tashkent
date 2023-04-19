import { Link } from "react-router-dom";
import "./explore.scss";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Explore() {
  return (
    <div className="explore">
      <div className="container">
        <div className="title">
          <span>Explore</span>
          <h1>The Hotel</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>

        <div className="items">
          <div className="item">
            <div className="container">
              <img src="/images/explore-1.png" alt="Quality Room" />
              <h2>Quality room</h2>
              <p>
                Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                auctor eget nunc sit amet.
              </p>

              <Link to="/">
                Read More <ArrowRightAltIcon className="icon" />
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <img src="/images/explore-2.png" alt="Quality Room" />
              <h2>Best Accommodation</h2>
              <p>
                Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                auctor eget nunc sit amet.
              </p>

              <Link to="/">
                Read More
                <ArrowRightAltIcon className="icon" />
              </Link>
            </div>
          </div>
          <div className="item">
            <div className="container">
              <img src="/images/explore-3.png" alt="Quality Room" />
              <h2>Restaurants & Bars</h2>
              <p>
                Nullam molestie lacus sit amet velit fermentum feugiat. Mauris
                auctor eget nunc sit amet.
              </p>

              <Link to="/">
                Read More
                <ArrowRightAltIcon className="icon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
