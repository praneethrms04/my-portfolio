import { FaGithub } from "react-icons/fa";
import "./WorkCardstyles.css";

const WorkCard = (props) => {
  return (
    <div class="a-box">
      <div class="img-container">
        <div class="img-inner">
          <div class="inner-skew">
            <img src={props.imgsrc} alt="img" />
          </div>
        </div>
      </div>
          <div>
            {props.text}
          </div>
      <div class="text-container">
        <h3>{props.title}</h3>
        <div>
          <div className="pro-buttons">
            <a href={props.view}>
              <button type="button">view</button>
            </a>
            <a href={props.source}>
              <button type="button">
                <FaGithub size={15} style={{ marginRight: "1px" }} />
                code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
