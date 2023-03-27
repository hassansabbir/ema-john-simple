import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div>
        <h2>Our Top Products: {products.length}</h2>
        <div className="products">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCartHandler={addToCartHandler}
            ></Product>
          ))}
        </div>
      </div>
      <div className="cartList">
        <h4>Order Summary</h4>
        <br />
        <p>Selected Items: {cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;
