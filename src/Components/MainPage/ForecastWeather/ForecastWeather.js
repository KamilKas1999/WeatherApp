import React from "react";
import Item from "./item/item";
const ForecastWeather = (props) => {
  let forecast = null;
  if (props.forecast) {
    forecast = props.forecast.map((forecast, id) => {
      return <Item key={id} info={forecast} />;
    });
  }

  return (
    <div>

      <div>{forecast}</div>
    </div>
  );
};
export default ForecastWeather;
