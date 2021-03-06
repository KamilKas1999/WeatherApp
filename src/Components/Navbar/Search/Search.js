import React, { Component } from "react";
import Input from "./Input/Input";
import Result from "./Result/Result";
import axios from "axios";
import './Search.scss'
class Search extends Component {
  state = {
    searched: null,
  };

  onSearch = (event) => {
    axios
      .get("https://weatherapi-com.p.rapidapi.com/search.json", {
        headers: {
          "x-rapidapi-key":
            "72ffa848b9mshd3aa098806b0103p164e63jsn3ec7937167fe",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          useQueryString: true,
        },
        params: {
          q: event.target.value,
        },
      })
      .then((data) => {
        let tempData = data.data;
        let cities = tempData.map((city) => {
          return city.name;
        });
        this.setState({
            searched: cities
        })
      });
  };

  clearState = () => {
    this.setState({
      searched : null
    })
  }

  onNameClick = (id) => {
    const temp = this.state.searched[id];
    return temp;
  }

  render() {
    return (
      <div className = "Search">
        <Input clicked={this.onSearch} changeCity ={this.props.changeCity}/>
        <Result cities = {this.state.searched} clicked = {this.onNameClick} clear={this.clearState}  changeCity ={this.props.changeCity}/>
      </div>
    );
  }
}

export default Search;
