import React, { Component } from "react";
import FirstBody from "../FirstBody/index";
import Model from "../Model/model";

export default class Body extends Component {
  render() {
    return (
      <div className="ml-3 row">
        <FirstBody />
        <Model />
      </div>
    );
  }
}
