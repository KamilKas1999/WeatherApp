import React from "react";
import Item from "./item/item";
const ForecastWeather = (props) => {
  let forecast = null;
  if (props.forecast) {
    forecast = props.forecast.map((forecast, id) => {
      return <Item key={id} info={forecast} />;
    });
  }

  return <div>{forecast}</div>;
};
export default ForecastWeather;
