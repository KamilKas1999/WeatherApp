import React, { Component } from "react";
import City from "../../Components/MainPage/City/City";
import CurrentWeather from "../../Components/MainPage/CurrentWeather/CurrentWeather";
import ForecastWeather from "../../Components/MainPage/ForecastWeather/ForecastWeather";
import axios from "axios";
import classes from "./MainPage.module.scss";
import Spinner from "../../Components/Ui/LoadingSpinner/LoadingSpinner";
class MainPage extends Component {
  state = {
    current: null,
    forecast: null,
    actualCity: null,
    loading: true,
  };

  startLoading = () => {
    this.setState({ loading: true });
  };

  componentDidMount() {
    this.startLoading();
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
          days: "3",
        },
      })
      .then((data) => {
        console.log(data)
        this.setState({
          current: data.data.current,
          actualCity: data.data.location.name,
          forecast: data.data.forecast.forecastday,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  componentDidUpdate() {
    const onlyCity = this.props.city.split(",");
    if (onlyCity[0] === this.state.actualCity) {
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
          days: "3",
        },
      })
      .then((data) => {
        console.log(data)
        this.setState({
          current: data.data.current,
          actualCity: data.data.location.name,
          forecast: data.data.forecast.forecastday,
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  render() {
    let content = (
      <div>
        <City city={this.props.city} />
        <CurrentWeather currentWeather={this.state.current} />
        <ForecastWeather forecast={this.state.forecast} />
      </div>
    );
    if (this.state.loading) {
      content = <Spinner />;
    }
    return <div className={classes.MainPage}>{content}</div>;
  }
}
export default MainPage;
