import "./slide.scss";
import StarIcon from "@mui/icons-material/Star";

function Slide() {
  return (
    <div className="slide">
      <div className="container">
        <div className="title">
          <span>Testimonial</span>
          <h1>What Our Clients Says</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="slide-container">
          <div className="slide-item">
            <div className="top">
              <img src="/images/testi-avatar-1.png" alt="" />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <img src="/images/testi-quote.png" alt="" />
            </div>
            <div className="stars">
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className="slide-item">
            <div className="top">
              <img src="/images/testi-avatar-1.png" alt="" />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <img src="/images/testi-quote.png" alt="" />
            </div>
            <div className="stars">
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>

          <div className="slide-item">
            <div className="top">
              <img src="/images/testi-avatar-1.png" alt="" />
              <div>
                <h2>Jina Nilson</h2>
                <span>Client</span>
              </div>
              <img src="/images/testi-quote.png" alt="" />
            </div>
            <div className="stars">
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
              <StarIcon className="icon" />
            </div>
            <p>
              “Phasellus aliquam quis lorem amet dapibus feugiat vitae purus
              vitae efficitur. Vestibulum sed elit id orci rhoncus ultricies.
              Morbi vitae semper consequat ipsum semper quam”.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
