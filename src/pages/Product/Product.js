import "./Product.css";

import React, { useContext } from "react";
import { ProductContext } from "../../Context/ProductsLibrary";
import { CartContext } from "../../Context/CartLibrary";

import { useParams } from "react-router-dom";

export const Product = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { cart, setCart } = useContext(CartContext);

  const product = products.find(
    (product) => parseInt(product.id, 10) === parseInt(id, 10)
  );
  if (!product) {
    return <div>Not Found</div>;
  }

  const addToCart = () => {
    const cartProduct = {
      id: product.id,
      title: product.title,
      img: product.img,
      price: product.price,
      category: product.category,
      qty: 1,
    };

    const index = cart.findIndex((item) => item.cartProduct.id === product.id);

    console.log(index);
    if (index === -1) {
      const newProducts = [...cart];
      newProducts.push({ cartProduct });
      setCart(newProducts);
      console.log(cart);
    } else {
      cart[index].cartProduct.qty += 1;
      console.log(cart);
    }
  };

  return (
    <>
      <h3>Product - {product.title}</h3>

      <div className="wrap">
        <div className="left">
          <div className="img">
            <img alt={product.title} width="40%" src={product.img} />
          </div>
        </div>
        <div className="right">
          <div className="title">{product.title}</div>
          <div className="price">Price: {product.price}</div>
          <div className="add-to-cart">
            <button className="btn btn-primary" onClick={addToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
