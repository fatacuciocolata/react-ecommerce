import "./Product.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartLibrary";

export const Product = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

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
    <div className="box">
      <h3>
        <Link to={`/product/${product.id}`}>{product.title}</Link>
      </h3>
      <div className="image">
        <Link to={`/product/${product.id}`}>
          <img alt={product.title} src={product.img} />
        </Link>
      </div>
      <div>{product.price} RON</div>
      <button className="btn btn-primary" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};
