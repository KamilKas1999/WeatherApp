import React from "react";
import classes from "./Result.module.scss";

const result = (props) => {
  let cities = null;
  if (props.cities) {
    cities = props.cities.map((city,id) => {
      return <p key = {id} onClick = {() => {props.changeCity(city)}}>{city}</p>;
    });
  }

  return <div className={classes.Result}>{cities}</div>;
};

export default result;
