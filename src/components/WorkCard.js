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
      <div class="text-container">
        <h3>{props.title}</h3>
        <div>
          <div className="pro-buttons">
            <a href={props.view}>
              <button type="button">view</button>
            </a>
            <a href={props.source}>
              <button type="button">source</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
