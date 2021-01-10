import "./Home.css";
import React from "react";
import { ProductsList } from "../../components/ProductsList/ProductsLists";

export default () => {
  return (
    <>
      <div className="title">
        <h2>Products</h2>
      </div>
      <ProductsList />
    </>
  );
};
