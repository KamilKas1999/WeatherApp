import React from "react";
import "./Logo.scss";
import sun from "../../../assets/logoSun.png";
import storm from "../../../assets/logoStorm.png";
const logo = (props) => (
  <div className="Logo">
    <div className="Content">
      <div>
        <img src={sun} alt="icon"></img>
      </div>
      <div>
        <p>WeatherApp</p>
      </div>
      <div>
        <img src={storm} alt="icon"></img>
      </div>
    </div>
  </div>
);
export default logo;
