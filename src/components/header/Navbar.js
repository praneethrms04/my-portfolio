import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
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
        <h2 className="portfolio">Praneeth's Portfolio</h2>
      </Link>
      <div class="nav-container red topBotomBordersOut">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          {/* <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li> */}
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
