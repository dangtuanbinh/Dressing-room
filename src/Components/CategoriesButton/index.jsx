import React, { Component } from "react";
import { connect } from "react-redux";

class CategoriesButton extends Component {
 
  render() {
    const { showName } = this.props.item;
    return (
      <>
        <button
          className="btn btn-secondary"
          onClick= {() => this.choosenCategory(this.props.item.type)} 
        >
          {showName}
        </button>
      </>
    );
  }
  choosenCategory = (payload) => {
    this.props.dispatch({
      type: 'SET_CATEGORY',
      payload
    })
}
}
export default connect()(CategoriesButton);
