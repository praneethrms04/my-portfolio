import { FaGithub, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import linkedin from ".././assets/linkedin.svg";
import dial from ".././assets/dial.svg";
import location from ".././assets/location.svg";
import mail from ".././assets/mail.svg";


import "./Footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <img src={location} alt="location" />
            <div className="mt-5">
              <h5 className="text-white">Puttaparthy, Andhra Pradesh.</h5>
              <h5 className="text-white">India</h5>
            </div>
          </div>
          <div className="phone">
            <h4>
              <img src={dial} alt="dial" className="mb-2" />
              <a href="tel:+917993665582">+91 79936-65582</a>
            </h4>
          </div>
          <div className="email">
            <h4>
             <img src={mail} alt="mail" />
             <a href="mailto:praneethrms04@gmail.com">praneethrms04@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="about">
            <h4>About me:</h4>
            <p>
              This is me Praneeth Kumar. I am intrested to build Mobile and Web
              applications.
            </p>
            <div className="social-media">
              <Link to="https://github.com/praneethrms04">
                <FaGithub
                  size={25}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>
              <Link to="https://twitter.com/Praneet17232711">
                <FaTwitter
                  size={25}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </Link>

              <Link to="https://www.linkedin.com/in/praneethkumar481158186/">
                <img src={linkedin} alt="linkedin" className="mb-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
