import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aux from "../hoc/Auxalinary";
import MainPage from '../Container/MainPage/MainPage'
class Layout extends Component {
  state = {
    city : "London"
  }

  cityChanged= (city)=>{
    this.setState({
      city : city
    })
    console.log(city)
  }
  render() {

    return (
      <Aux>
        <Navbar changeCity ={this.cityChanged}/>
        <MainPage/>
      </Aux>
    );
  }
}
export default Layout;
