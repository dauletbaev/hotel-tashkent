import "./aboutUs.scss";
import DoneIcon from "@mui/icons-material/Done";

function AboutUs({ page }) {
  return (
    <div className="about-us">
      <div className="container">
        <div className="left">
          <img src="images/about-us-1.png" className="img-1" alt="" />

          <img src="images/about-us-2.png" className="img-2" alt="" />
        </div>

        <div className="right">
          <span>About Us</span>
          <h1>Most Safe & Rated Hotel In Nukus.</h1>
          <p>
            Morbi tortor urna, placerat vel arcu quis, fringilla egestas neque.
            Morbi sit amet porta erat, quis rutrum risus. Vivamus et gravida
            nibh, quis posuere felis. In commodo mi lectus, Integer ligula
            lorem, finibus vitae lorem vitae tincidunt dolor consequat quis.
          </p>
          <p>
            Cras finibus laoreet felis et hendrerit. Integer ligula lorem,
            finibus vitae lorem at, egestas consectetur urna. Integer id
            ultricies elit. Maecenas sodales nibh, quis posuere felis. In
            commodo mi lectus venenatis metus eget fringilla. Suspendisse varius
            ante eget lorem tempus blandit. Aenean eu vulputate lorem, quis
            auctor lectus.
          </p>

          <ul>
            <li>
              <DoneIcon className="icon" />
              24 Month / 24,000km Nationwide Warranty monotone
            </li>
            <li>
              <DoneIcon className="icon" />
              Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.
            </li>
            <li>
              <DoneIcon className="icon" />
              Customer Rewards Program and excellent technology
            </li>
          </ul>

          {page === "home" && <button>DISCOVER MORE</button>}

          {/* <img src="images/about-us-bg.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
