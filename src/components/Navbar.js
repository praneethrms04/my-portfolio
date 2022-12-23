import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import {
  FaHome,
  FaProjectDiagram,
  FaSlideshare,
  FaCommentDots,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [color, setColor] = useState(false);
  const colorChange = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
     <div class="nav-container red topBotomBordersOut">
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <FaHome className="mb-2 me-1" size={25} style={{ color: "orange" }} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FaProjectDiagram
              className="mb-2 me-1"
              size={25}
              style={{ color: "orange" }}
            />
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaSlideshare
              className="mb-2 me-1"
              size={25}
              style={{ color: "orange" }}
            />
            About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaCommentDots
              className="mb-2 me-1"
              size={25}
              style={{ color: "orange" }}
            />
            Contact
          </Link>
        </li>
      </ul>
      </div>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={25} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={25} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
