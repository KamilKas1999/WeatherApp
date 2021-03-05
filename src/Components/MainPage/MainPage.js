import React, { Component } from "react";
import City from "./City/City";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastWeather from "./ForecastWeather/ForecastWeather";
import axios from "axios";
import classes from './MainPage.module.scss'
class MainPage extends Component {
  state = {
    current: null,
    forecast : null,
    actualCity: null,
  };

  componentDidMount() {
    axios
      .get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
        headers: {
          "x-rapidapi-key":
            "72ffa848b9mshd3aa098806b0103p164e63jsn3ec7937167fe",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          useQueryString: true,
        },
        params: {
          q: this.props.city,
          days: "14",
        },
      })
      .then((data) => {
        console.log(data.data.current)
        console.log(data.data.forecast.forecastday)
        console.log(data.data.forecast)
        this.setState({
          current: data.data.current,
          actualCity: data.data.location.name,
          forecast: data.data.forecast.forecastday
        });
      });
  }

  componentDidUpdate() {
    console.log(this.props.city);
    console.log(this.state.actualCity);

    if (this.props.city.includes(this.state.actualCity)) {
      console.log("zwracam");
      return;
    }
    axios
      .get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
        headers: {
          "x-rapidapi-key":
            "72ffa848b9mshd3aa098806b0103p164e63jsn3ec7937167fe",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          useQueryString: true,
        },
        params: {
          q: this.props.city,
          days: "14",
        },
      })
      .then((data) => {
        console.log(data.data.location);
        this.setState({
          current: data.data.current,
          actualCity: data.data.location.name,
          forecast: data.data.forecast.forecastday
        });
      });
  }

  render() {
    return (
      <div className = {classes.MainPage}>
        <City city={this.props.city} />
        <CurrentWeather currentWeather={this.state.current} />
        <ForecastWeather forecast = {this.state.forecast}/>
      </div>
    );
  }
}
export default MainPage;
