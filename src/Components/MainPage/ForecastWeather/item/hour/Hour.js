import React from "react";
import classes from "./Hour.module.scss";
const hour = (props) => (
  <div className={classes.Hour}>
    <p>{props.info.time.substring(props.info.time.length - 5)}</p>
    <img src={props.info.condition.icon} alt="icon" />
    <p>{props.info.temp_c}°C</p>
  </div>
);
export default hour;
