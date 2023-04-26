import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

export default class ProductList extends Component {
  render() {
    let { ProdList, HienThi, modal } = this.props;
    return <div>{<ProductItem HienThi={HienThi} ProdList={ProdList} />}</div>;
  }
}
