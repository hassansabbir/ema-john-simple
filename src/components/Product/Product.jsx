import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div>
      <div className="card">
        <div>
          <img src={img} alt="" />
          <h4>{name}</h4>
          <h4>Price: {price}</h4>
        </div>
        <div>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} stars</p>
        </div>
      </div>
      <button className="cart-btn">Add to Cart</button>
    </div>
  );
};

export default Product;
