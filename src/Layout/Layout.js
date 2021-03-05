import React, { Component } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Aux from "../hoc/Auxalinary";
class Layout extends Component {
  render() {
    return (
      <Aux>
        <Navbar />
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}
export default Layout;
