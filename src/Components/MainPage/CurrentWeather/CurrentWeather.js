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
            <img src={props.currentWeather.condition.icon} alt="icon"></img>
          </div>
          <div>
            <h1>{props.currentWeather.condition.text}</h1>
          </div>
        </div>
        <div className={classes.Row}>
          <div className={classes.Temp}>
            <div>
              <h6>temperature:</h6>
              {props.currentWeather.temp_c}°C Feels:{" "}
              {props.currentWeather.feelslike_c}°C
            </div>
          </div>
          <div className={classes.Pressure}>
            <h6>Pressure: </h6>
            <p>{props.currentWeather.pressure_mb} mBar</p>
          </div>
          <div className={classes.Wind}>
              <h6>Wind</h6>
              {props.currentWeather.wind_kph}Km/h {props.currentWeather.wind_dir}
              
            </div>
        </div>
        <div className={classes.Row}>
          <p>Last update : {props.currentWeather.last_updated}</p>
        </div>
      </Aux>
    );
  }
  return <div className={classes.CurrentWeather}>{actualWeather}</div>;
};
export default CurrentWeather;
