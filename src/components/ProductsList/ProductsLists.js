import "./ProductsLists.css";

import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductsLibrary";
import { Product } from "../Product/Product";

export const ProductsList = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="container-wrap">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
