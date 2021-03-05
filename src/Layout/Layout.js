import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aux from "../hoc/Auxalinary";
import MainPage from "../Components/MainPage/MainPage";
class Layout extends Component {
  state = {
    city: "London",
  };

  cityChanged = (city) => {
    this.setState({
      city: city,
    });
  };
  render() {
    return (
      <Aux>
        <Navbar changeCity={this.cityChanged} />
        <MainPage city={this.state.city} />
      </Aux>
    );
  }
}
export default Layout;
