import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../Component/Header";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { decreaseQunatity, increaseQuantity } from "./Slice/productSlice";
import {
  decreaseCartQuantity,
  dropItem,
  increaseCartQuantity,
} from "./Slice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItem);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const incquan = (e) => {
    dispatch(increaseQuantity(e.id));
    const val = cartItems.find((item) => item.id === e.id);
    if (val.count > 0) {
      dispatch(increaseCartQuantity(val.id));
    } else {
      window.alert(`${val.title} has no more stock`);
    }
  };
  const dicquan = (e) => {
    const val = cartItems.find((item) => item.id === e.id);
    if (val.quantity > 0) {
      dispatch(decreaseCartQuantity(val.id));
      dispatch(decreaseQunatity(val.id));
    } else {
      dispatch(decreaseQunatity(val.id));
      dispatch(dropItem(val));
    }
  };
  return (
    <div>
      <Header />
      <div className="col-11 m-auto">
        {cartItems.length > 0 ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Item Name</th>
                <th scope="col">Qunantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((val, ind) => {
                return (
                  <tr key={ind}>
                    <th scope="row">{ind + 1}</th>
                    <td>{val.title}</td>
                    <td>
                      <CiCircleMinus
                        style={{ fontSize: "28px" }}
                        onClick={(e) => dicquan(val)}
                      />
                      {val.quantity}
                      <CiCirclePlus
                        style={{ fontSize: "28px" }}
                        onClick={(e) => incquan(val)}
                      />
                    </td>
                    <td>{val.totalPrice.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th scope="col">Total Qunatity</th>
                <th scope="col">{totalQuantity}</th>
                <th scope="col">Total Amount</th>
                <th scope="col">{totalAmount.toFixed(2)}</th>
              </tr>
            </thead>
          </table>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartPage;
