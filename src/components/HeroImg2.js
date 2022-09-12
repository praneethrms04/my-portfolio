import "./HeroImg2styles.css";

import React, { Component } from "react";

export class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <h1 className="display-1 fw-bold">{this.props.heading}</h1>
          <p className="fw-bold">{this.props.text}</p>
          
        </div>
      </div>
    );
  }
}

export default HeroImg2;


