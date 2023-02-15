import { Link } from "react-router-dom";
import computerImg from "../../assets/computer.gif"
import "./AboutContentStyles.css";

const AboutContent = () => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="text-center">
          Who Am I <span className="text-danger">?</span>
        </h1>
        <p className="word">
          I'm Praneeth kumar. I worked on various projects related to the
          software domain which provided me a great deal of technical exposure
          along with the importance of working in a team and the value of client
          satisfaction.
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
