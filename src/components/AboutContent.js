import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import Reactimg1 from "../images/Reactimg1.png"
import Reactimg2 from "../images/Reactimg2.png"

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1>Who Am I ?</h1>
        <p>I am react front-end developer. I create responsive create websites for my clients.</p>
        <Link to='/contact'>
            <button type="button" className="btn btn-outline-warning text-danger" >CONTACT</button>
        </Link>
    </div>
    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={Reactimg2} 
                className="img"
                alt="react-img1" />
                
            </div>
            <div className="img-stack bottom">
                <img src={Reactimg1} 
                className="img"
                alt="react-img1" />
                
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default AboutContent
