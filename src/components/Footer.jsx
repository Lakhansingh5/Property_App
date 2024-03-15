import "./Footer.css";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer2">
        <a href="#" className="logo2">
          XYZ <span className="span2">INDUSTRIES</span>
        </a>
        <p>
          XYZ Industries: Where real estate dreams meet seamless transactions,
          transforming aspirations into achievements.
        </p>
        <br /> <br />
        <button className="buttonF">Explore</button>
      </div>

      <div className="quick">
        <h1>Quick Links</h1>
        <p>About Us</p>
        <p> Blogs</p>
        <p>Testimonials</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Site Map</p>
      </div>

      <div className="quick">
        <h1>Customer Support</h1>
        <p>Feedback</p>
        <p> report a Problem</p>
        <p>Request a Call Back</p>
      </div>

      <div className="quick">
        <h1>Subscribe Us</h1>
        <p>Subscribe to our weekly newsletter</p>
        <div className="box">
          <input
            className="email"
            type="text"
            id="email"
            name="email"
            value="Email Id"
          />
          <button className="Subscribe">Subscribe</button>
        </div>
      </div>
      <div className="horizontal"> </div>

      <div className="icons">
        <FaYoutube className="icon" />
        <IoLogoTwitter className="icon" />
        <FaInstagram className="icon" />
        <FaFacebook className="icon" />
      </div>
      <p className="p">Terms|Privacy</p>
      <p className="p2">c2024XYZ</p>


    
    </div>
  );
};

export default Footer;
