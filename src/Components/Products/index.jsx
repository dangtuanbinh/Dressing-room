import React, { Component } from "react";
import ProductItems from "../ProductItems/index";
import { connect } from "react-redux";

class Products extends Component {
  renderProductItem = () => {
    return this.props.productList.filter(item => item.type === this.props.choosenCategory).map((item, index) => {
      return <ProductItems item={item} key={index} />;
    });
  };
  render() {
    return (
        <div className="row">
            {this.renderProductItem()}
        </div>)
  }
}
const mapStateToProps = (state) => ({
  productList: state.product,
  choosenCategory: state.choosenCategory,
});
export default connect(mapStateToProps)(Products);
