import {
  IconMapPin,
  IconClockHour3,
  IconMailOpened,
  IconPhone,
} from '@tabler/icons-react'

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="title">
          <span>Contact Us</span>
          <h1>Easy to find</h1>
          <p>
            Proin consectetur non dolor vitae pulvinar. Pellentesque
            sollicitudin dolor eget neque viverra, sed interdum metus interdum.
            Cras lobortis pulvinar dolor, sit amet ullamcorper dolor iaculis vel
          </p>
        </div>
        <div className="items">
          <div className="left">
            <div className="item">
              <div className="icon-wrapper">
                <IconMapPin className="icon" />
              </div>
              <div className="desc">
                <h2>Address</h2>
                <p>1247/Plot No. 39, 15th, Nukus, Karakalpakstan</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <IconClockHour3 className="icon" />
              </div>
              <div className="desc">
                <h2>Working Hours</h2>
                <p>Monday to Friday 09:00 to 18:30 Saturday 15:30</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <IconMailOpened className="icon" />
              </div>
              <div className="desc">
                <h2>Message Us</h2>
                <p>support@example.com info@example.com</p>
              </div>
            </div>
            <div className="item">
              <div className="icon-wrapper">
                <IconPhone className="icon" />
              </div>
              <div className="desc">
                <h2>Phone</h2>
                <p>+998 93 772-71-66</p>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="wrapper">
              <h2>Get In Touch</h2>
              <form>
                <div className="input">
                  <input type="text" placeholder="First Name" />
                  <input type="text" placeholder="Last Name" />
                </div>
                <div className="input">
                  <input type="text" placeholder="Phone No." />
                  <input type="email" placeholder="Email" />
                </div>

                <textarea placeholder="Write comments" />
                <button>SUBMIT NOW</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map">
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d601.1995892051941!2d59.605315104680166!3d42.45749677140515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a181c63f519%3A0x5fc8cd524103c600!2sToshkent!5e0!3m2!1suz!2s!4v1681757500774!5m2!1suz!2s"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
