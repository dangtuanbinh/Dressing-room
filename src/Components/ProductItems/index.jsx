import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItems extends Component {
  render() {
    const { name, imgSrc_jpg } = this.props.item;
    return (
        <div className="col-3 card m-1">
          <img src={imgSrc_jpg} alt="product 1" />
          <p>{name}</p>
          <button className="btn btn-primary">Try it</button>
        </div>
    );
  }
}
export default connect()(ProductItems);
