
import "./WorkCardstyles.css";
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";


const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          
          {
            ProjectCardData.map((item, index)=>{
                 return (
                    <WorkCard key={index}
                    imgsrc ={item.imgsrc}
                    title ={item.title}
                    text ={item.text}
                    view = {item.view}
                    source = {item.source}
                     />
                 )
            })
          }
                
            
        </div>
    </div>
  )
}

export default Work