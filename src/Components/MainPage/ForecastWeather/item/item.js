import React from "react";
import classes from "./Item.module.scss";
const item = (props) => (
  <div className={classes.Item}>
    <h4>{props.info.date}</h4>
    <div>
      <img src={props.info.day.condition.icon} />
      <h5>{props.info.day.condition.text}</h5>
    </div>
  </div>
);
export default item;
