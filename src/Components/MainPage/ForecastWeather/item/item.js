import React from "react";
import classes from "./Item.module.scss";
import Hour from "./hour/Hour";
const item = (props) => {
  let hours = null;
  if (props.info) {
    hours = props.info.hour.map((hour, id) => {
      return <Hour key={id} info={hour} />;
    });
  }
  return (
    <div className={classes.Item}>
      <h4>{props.info.date}</h4>
      <div className={classes.Main}>
        <img src={props.info.day.condition.icon} alt="icon" />
        <h4>{props.info.day.condition.text}</h4>
      </div>
      <div className={classes.Row}>
        <div>
          <h5>Temperature:</h5>
          <p>Max: {props.info.day.maxtemp_c}°C </p>
          <p>Avg: {props.info.day.avgtemp_c}°C </p>
          <p>Min: {props.info.day.mintemp_c}°C </p>
        </div>
        <div>
          <h5>Rainfall:</h5>
          <p>Chance for snow: {props.info.day.daily_chance_of_snow}% </p>
          <p>Chance for snow: {props.info.day.daily_chance_of_rain}% </p>
        </div>
        <div>
          <h5>Wind:</h5>
          <p>{props.info.day.maxwind_kph}Km/h</p>
        </div>
      </div>
      <div className={classes.Row}>
        <div>
          <h5>Sun:</h5>
          <p>Sunrise : {props.info.astro.sunrise}</p>
          <p>Sunset : {props.info.astro.sunset}</p>
        </div>
        <div>
          <h5>Moon:</h5>
          <p>Moonphase : {props.info.astro.moon_phase}</p>
          <p>Moonrise : {props.info.astro.moonrise}</p>
          <p>Moonset : {props.info.astro.moonset}</p>
        </div>
      </div>
      <div className={classes.Prediction}>
        <h5>Hours prediction:</h5>
      </div>

      <div className={classes.Hours}>{hours}</div>
    </div>
  );
};
export default item;
