import React, { useState } from "react";

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      title: "Produs",
      img: "https://istyleprod.s3.amazonaws.com/RO/tradein/iphone-11pro.jpg",
      price: 12299.99,
      category: "electronics",
      id: 1,
    },
    {
      title: "Xiaomi Mi Mop PRO",
      img:
        "https://p1.akcdn.net/full/667872018.xiaomi-mi-robot-vacuum-mop-pro.jpg",
      price: 823.99,
      category: "vacuum",
      id: 2,
    },
    {
      title: "iPhone 11 Pro",
      img: "https://istyleprod.s3.amazonaws.com/RO/tradein/iphone-11pro.jpg",
      price: 1399.99,
      category: "electronics",
      id: 3,
    },
    {
      title: "iPhone 12 Pro",
      img: "https://istyleprod.s3.amazonaws.com/RO/tradein/iphone-11pro.jpg",
      price: 1699.99,
      category: "electronics",
      id: 4,
    },
  ]);

  // Generate next id
  const getNextId = () => {
    let lastBigId = 0;

    products.map((x) => {
      if (x.id > lastBigId) {
        lastBigId = x.id;
      }
      return false;
    });

    return lastBigId + 1;
  };

  const providerValue = {
    products,
    setProducts,
    getNextId,
  };

  return (
    <ProductContext.Provider value={providerValue}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
