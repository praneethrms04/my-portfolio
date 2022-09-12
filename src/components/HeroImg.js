import IntroImg from "../images/Introimg.png";
import "./HeroImgstyles.css";
import { Link } from "react-router-dom";
import Projects from '../routes/Projects'
import Contact from '../routes/Contact'

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p className="lead fw-bold text-uppercase fs-2 "> <p>i 'm</p> PRANEETH KUMAR</p>
        <h1 className="display-1 fw-bold ">React Developer</h1>
        <div>
        <button type="button" className="btn btn-warning btn-lg   m-2"><Link to='/projects' element={<Projects />}>Projects</Link></button>
        
        <button type="button" className="btn btn-outline-warning btn-lg m-2"><Link to='/contact' element={<Contact />}>Contact</Link></button>
        
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
