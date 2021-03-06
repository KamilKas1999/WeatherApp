import React from "react";
import classes from "./Result.module.scss";

const result = (props) => {
  const func = (city, id) => {
    props.changeCity(city);
    props.clear(id);
  };

  let cities = null;
  if (props.cities) {
    cities = props.cities.map((city, id) => {
      return (
        <p
          key={id}
          onClick={() => {
            func(city, id);
          }}
        >
          {city}
        </p>
      );
    });
  }

  return <div className={classes.Result}>{cities}</div>;
};

export default result;
