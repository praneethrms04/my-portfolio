import "./HeroImg2styles.css";

import React, { Component } from "react";

export class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <div className="heading">
          <div className="content mt-5">
            <h2>{this.props.heading}</h2>
            <h2>{this.props.heading}</h2>
          </div>
            <p className="mt-5">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default HeroImg2;
