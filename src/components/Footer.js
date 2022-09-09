import { FaGithub, FaHome,FaLinkedin,FaMailBulk,FaPhone, FaTwitter } from "react-icons/fa";
import "./Footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <h4>Puttaparthi, Andhra Pradesh.</h4>
              <h4>India</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
                <FaPhone size={25} style={{ color: "#fff", marginRight: "2rem" }} /> 91-7993665582
            </h4>
          </div>
          <div className="email">
            <h4>
                <FaMailBulk size={25} style={{ color: "#fff", marginRight: "2rem" }} /> praneethrms04@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
            <div className="about">
                <h4>About me:</h4>
                <p>This is me Praneeth Kumar. I am intrested to build Mobile and Web applications. </p>
            </div>
            <div className="social-media">
            <FaGithub size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaTwitter size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
