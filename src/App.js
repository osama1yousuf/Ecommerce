import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Cartpage from "./Pages/Cartpage";
import { totalProducts, increaseStock } from "./Pages/Slice/productSlice";
import Data from "./product.json";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    return state.product.productList;
  });
  const cartList = useSelector((state) => {
    return state.cart.cartItem;
  });

  useEffect(() => {
    if (productList.length <= 0) {
      dispatch(totalProducts(Data));
      console.log("first");
    } else {
      if (Data.length === productList.length) {
        console.log("lenght is equal");
        for (let i = 0; i < Data.length; i++) {
          const element = Data[i];
          // console.log(cartList);
          const val = cartList.find((item) => item.id === productList[i].id);
          if (val) {
            if (
              element.rating.count !==
              productList[i].rating.count + val.quantity
            ) {
              let prevQuantity = productList[i].rating.count + val.quantity;
              let changeQunatity = element.rating.count - prevQuantity;
              dispatch(
                increaseStock({
                  id: element.id,
                  increaseCount: changeQunatity,
                })
              );
            } else {
              console.log(`no item stock change`);
            }
          }
        }
      }
    }
  });
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/cart" element={<Cartpage />} />
    </Routes>
  );
}

export default App;
