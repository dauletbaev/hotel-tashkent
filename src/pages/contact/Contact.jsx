import "./contact.scss";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import ContactUs from "../../components/contact-us/ContactUs";

function Contact() {
  return (
    <div className="contact">
      <Header />
      <Navbar />
      <div className="top">
        <h1>
          Great choice for a relaxing vacation for families with children or a
          group of friends
        </h1>
      </div>

      <ContactUs />
      <Footer />
    </div>
  );
}

export default Contact;
