import "./WorkCardstyles.css";
// import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    
    <div className="project-card">
      <img src={props.imgsrc}alt="images"  />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-buttons">
          <a href={props.view}>
            <button type="button" className="btn btn-outline-warning">
               view
            </button>
          </a>
          <a href={props.source}>
            <button
              type="button"
              className="btn btn-outline-primary text-warning"
            >
              source
            </button>
          </a>
        </div>
      </div>
    </div>
  
  );
};

export default WorkCard;
