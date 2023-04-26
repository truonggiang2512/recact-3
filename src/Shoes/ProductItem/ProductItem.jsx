import React, { Component } from "react";

export default class ProductItem extends Component {
  ArrProduct = () => {
    let { ProdList, HienThi } = this.props;
    return ProdList.map((sp) => {
      return (
        <div className="card col-4">
          <img src={sp.image} alt="" className="w-100 h-100" />
          <h4>{sp.name}</h4>
          <p>{sp.price}$</p>
          <div className="d-flex ">
            <button
              onClick={() => {
                HienThi(sp);
              }}
              className="btn btn-success w-50 my-2 mx-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Review
            </button>
            <button onClick={() => {}} className="btn btn-dark w-50 my-2">
              add to cart
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row"> {this.ArrProduct()} </div>
      </div>
    );
  }
}
<button
  type="button"
  class="btn btn-primary"
  data-bs-toggle="modal"
  data-bs-target="#staticBackdrop"
>
  Launch static backdrop modal
</button>;
