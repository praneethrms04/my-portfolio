import "./WorkCardstyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "../../config/WorkCardData";

const Work = () => {
  // let result = item.text.substring(1, 4);
  return (
    <div className="work-container">
      <div className="project-container">
        {ProjectCardData.map((item, index) => {
          return (
            <WorkCard
              key={index}
              imgsrc={item.imgsrc}
              title={item.title}
              // text={item.text.substring(0, 70)}
              view={item.view}
              source={item.source}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Work;
