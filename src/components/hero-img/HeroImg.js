import IntroImg from "../../images/Introimg.png";

import "./HeroImgstyles.css";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="intro-img" />
      </div>
      <div className="content">
        <p className="fs-2 ">
          <p>I 'm</p>
          <div className="fw-bolder waviy ">
            <span style={{ "--i": "1" }}>P</span>
            <span style={{ "--i": "2" }}>r</span>
            <span style={{ "--i": "3" }}>a</span>
            <span style={{ "--i": "4" }}>n</span>
            <span style={{ "--i": "5" }}>e</span>
            <span style={{ "--i": "6" }}>e</span>
            <span style={{ "--i": "7" }}>t</span>
            <span style={{ "--i": "8" }}>h</span>
          </div>
        </p>
        <h1 className="animate-charcter">Frontend Developer</h1>
        <div>
          <button type="button" className="button-resume">
            <a href="https://drive.google.com/file/d/1OM92V4g0F8OpdgwlbBndbpOXlJvk0n6r/view?usp=sharing">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
