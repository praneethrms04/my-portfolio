import "./HeroImg2styles.css";

const  HeroImg2 = ({heading, text})=> {
 
    return (
      <div className="hero-img">
        <div className="heading">
          <div className="content mt-5">
            <h2>{heading}</h2>
          </div>
            <p className="mt-5">{text}</p>
        </div>
      </div>
    );
 
}

export default HeroImg2;
