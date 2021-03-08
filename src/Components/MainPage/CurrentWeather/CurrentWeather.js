import React from "react";
import classes from "./CurrentWeather.module.scss";
import Aux from "../../../hoc/Auxalinary";
const CurrentWeather = (props) => {
  let actualWeather = null;
  if (props.currentWeather) {
    actualWeather = (
      <Aux>
        <div className={classes.Row}>
          <div className={classes.Row}>
            <img src={props.currentWeather.condition.icon} alt="icon"></img>
            <h1>{props.currentWeather.condition.text}</h1>
          </div>
         
        </div>
        <div className={classes.Row}>
          <div className={classes.Temp}>
            <div>
              <h6>Temperature:</h6>
              <p>{props.currentWeather.temp_c}°C </p>
              <p>Feels: {props.currentWeather.feelslike_c}°C</p>
            </div>
          </div>
          <div className={classes.Pressure}>
            <h6>Pressure: </h6>
            <p>{props.currentWeather.pressure_mb} mBar</p>
          </div>
          <div className={classes.Wind}>
            <h6>Wind:</h6>
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
