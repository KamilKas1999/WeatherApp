import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./App.scss";
import Layout from "./Layout/Layout";

class App extends Component {
  state = {
    city: null,
  };

  cityChanged = (city) => {
    this.setState({
      city: city,
    });
    localStorage.setItem('city', city);
  };

  componentDidMount(){
    if(localStorage.getItem('city')){
      const city = localStorage.getItem('city');
      this.setState({city: city})
    }else{
      this.setState({city: "London, City of London, Greater London, United Kingdom"})
    }

  }

  render() {
    return (
      <div className="App">
        <Layout changeCity={this.cityChanged} city={this.state.city} />
      </div>
    );
  }
}

export default App;
