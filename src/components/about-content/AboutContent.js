import { Link } from "react-router-dom";
import computerImg from "../../assets/computer.gif";
import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">
          Who Am I <span className="text-danger">?</span>
        </h1>
        <p className="word">
          Dynamic and innovative Front-end Developer with a strong understanding
          of web development concepts. Proficient in React, HTML, CSS, and
          JavaScript. Experienced in using Redux,Node.js, and Express.js
          .Committed to delivering high- quality and scalable web solutions.
        </p>
        <div className="text-center me-3">
          <Link to="/contact">
            <button type="button">CONTACT</button>
          </Link>
        </div>
      </div>
      <div className="col">
        <img src={computerImg} alt="img" className="ms-5" width="70%" />
      </div>
    </div>
  );
};

export default AboutContent;
