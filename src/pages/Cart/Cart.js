import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartLibrary";

export default () => {
  const { cart } = useContext(CartContext);
  console.log(cart);
  console.log(cart.map((x) => x.cartProduct.price));

  // calculate the total
  const total = cart
    .map((x) => x.cartProduct.price)
    .reduce(function (a, b) {
      return a + b;
    }, 0);

  console.log(total);
  return (
    <>
      <h3>Cart</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr className="cartProduct" key={index}>
              <td className="img">
                <img
                  alt={product.cartProduct.title}
                  src={product.cartProduct.img}
                />
              </td>
              <td className="title">{product.cartProduct.title}</td>
              <td className="qty">{product.cartProduct.qty}</td>
              <td className="price">{product.cartProduct.price} RON</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{total} RON</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
