import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteFromCart,
  clearCart,
  changeAmount,
} from "../../../../features/ecommerce/ecommerceSlice";
import "../index.css";
const Cart = () => {
  var dispatch = useDispatch();
  let id = 0;
  const cartItems = useSelector((store) => store.ecommerceApp.cart);
  return (
    <div>
      <div className="d-md-flex">
        <div className="container d-flex row-cols-2 row-cols-md-1 flex-row flex-wrap bg-yellow col-md-4">
          {cartItems.map((item) => (
            <div className=" position-relative">
              {" "}
              <div
                className="d-flex flex-column flex-md-row bg-light col-10 col-md-4  cartitem d-flex align-items-center m-4 rounded-5"
                key={++id}
              >
                <img src={item.src} className="img-fluid" alt="" />
                <h4 className="m-3 text-center">{item.name}</h4>
                <p className="m-3 text-center">Price: {item.price}$</p>
                <div className="container ms-3 d-flex">
                  <label for="amount">Amount:</label>

                  <select
                    onChange={(e) => dispatch(changeAmount({id:item.id,value:e.target.value}))}
                    name="amount"
                    id="amount"
                    className="border-0 ms-2"
                  >
                    <option
                      value="1"
                      selected={item.amount == 1 ? "selected" : ""}
                    >
                      1
                    </option>
                    <option
                      value="2"
                      selected={item.amount == 2 ? "selected" : ""}
                    >
                      2
                    </option>
                    <option
                      value="3"
                      selected={item.amount == 3 ? "selected" : ""}
                    >
                      3
                    </option>
                    <option
                      value="4"
                      selected={item.amount == 4 ? "selected" : ""}
                    >
                      4
                    </option>
                    <option
                      value="5"
                      selected={item.amount == 5 ? "selected" : ""}
                    >
                      5
                    </option>
                    <option
                      value="6"
                      selected={item.amount == 6 ? "selected" : ""}
                    >
                      6
                    </option>
                    <option value={item.amount.toString()} selected="selected">
                      {item.amount}
                    </option>
                  </select>
                </div>
                    <button
                      className="btn my-3 my-md-0 translate-md-middle position-md-absolute btn-danger top-50 end-0"
                      onClick={() => dispatch(deleteFromCart({ id: item.id }))}
                    >
                      x
                    </button>
              </div>
            </div>
          ))}
        </div>
        <div className="container col-4 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex align-items-start">
            <h4 className="">Total:{localStorage["total"]!=undefined ? localStorage["total"]:0}$</h4>
          </div>
          <div className="">
            <button className="btn btn-danger">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
