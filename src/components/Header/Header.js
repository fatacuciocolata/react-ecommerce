import "./Header.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartLibrary";

export const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="topbar">
      <ul>
        <Link to="/">Shop</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </ul>
    </div>
  );
};
