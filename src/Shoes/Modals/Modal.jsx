import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { State } = this.props;
    console.log(State);
    return (
      <div className="container" style={{ minHeight: 400, paddingTop: 80 }}>
        <div
          class="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="staticBackdropLabel">
                  Tên sản phẩm
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="d-flex">
                  <div className="w-50">
                    <img
                      src={State.sanPham.image}
                      className="w-100 align-item-center"
                      alt=""
                    />
                  </div>
                  <div className="w-50">
                    <h3>{State.sanPham.name}</h3>
                    <h4>{State.sanPham.alias}</h4>
                    <p className="text-danger">{State.sanPham.price}$</p>
                    <p>{State.sanPham.quantity} item</p>
                    <p>{State.sanPham.description}</p>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button className="btn btn-danger text-white">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
