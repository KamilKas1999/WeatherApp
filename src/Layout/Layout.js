import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aux from "../hoc/Auxalinary";
import MainPage from '../Container/MainPage/MainPage';

class Layout extends Component{
  
  render() {
    return (
      <Aux>
        <Navbar changeCity={this.props.changeCity} />
        <MainPage city={this.props.city} />
      </Aux>
    );
  }
}
export default Layout;
