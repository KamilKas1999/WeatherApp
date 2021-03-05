import React, { Component } from "react";

class Input extends Component {

  constructor(props){
    super(props);
    this.input = React.createRef();
  }


  render() {
    return (
      <div>
        <input ref = {this.input} type="text" onChange={this.props.clicked} />
      </div>
    );
  }
}
export default Input;
