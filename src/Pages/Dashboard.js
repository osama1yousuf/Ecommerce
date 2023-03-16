import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Component/Header";
import ProductList from "../Component/ProductList";
import { totalProducts } from "./Slice/productSlice";
import Data from "../product.json";

const Dashboard = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => {
    return state.product.productList;
  });
  useEffect(() => {
    dispatch(totalProducts(Data));
  }, []);
  return (
    <>
      <Header />
      <ProductList productList={productList} />
    </>
  );
};

export default Dashboard;
