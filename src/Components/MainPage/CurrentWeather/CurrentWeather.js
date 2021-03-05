import React from "react";
import classes from "./CurrentWeather.module.scss";
import Aux from "../../../hoc/Auxalinary";
const CurrentWeather = (props) => {
  let actualWeather = null;
  if (props.currentWeather) {
    actualWeather = (
      <Aux>
        <div className={classes.Row}>
          <div>
            <img src={props.currentWeather.condition.icon}></img>
          </div>
          <div>
            <h1>{props.currentWeather.condition.text}</h1>
          </div>
        </div>
        <div>
          <div className={classes.Temp}>
            <div>{props.currentWeather.feelslike_c}°C</div>
            <div>{props.currentWeather.feelslike_f}°F</div>
          </div>
        </div>
      </Aux>
    );
  }
  return <div className={classes.CurrentWeather}>{actualWeather}</div>;
};
export default CurrentWeather;
