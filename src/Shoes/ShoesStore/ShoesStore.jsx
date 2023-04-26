import React, { Component } from "react";
import Modal from "../Modals/Modal";
import ProductList from "../ProductList/ProductList";
import { Data } from "../Data.js";

let ProdList = Data;

export default class ShoesStore extends Component {
  state = {
    sanPham: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  HienThi = (spClick) => {
    console.log(spClick);
    this.setState({
      sanPham: spClick,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          {" "}
          <div className="d-flex mt-3">
            <div className="w-25  text-center">
              <a href="# " className="mx-3 text-decoration-none text-dark">
                Home
              </a>
              <a href="" className=" text-decoration-none text-dark">
                Shop
              </a>
            </div>
            <div className="w-75 ">
              {" "}
              <h3 className="text-center">Shoeshop</h3>
              <ProductList HienThi={this.HienThi} ProdList={ProdList} />
              <Modal State={this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
