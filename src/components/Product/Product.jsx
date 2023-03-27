import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  const addToCartHandler = props.addToCartHandler;

  return (
    <div>
      <div className="card">
        <div>
          <img src={img} alt="" />
          <h4>{name}</h4>
          <h4>Price: ${price}</h4>
        </div>
        <div>
          <p>Manufacturer: {seller}</p>
          <p>Ratings: {ratings} stars</p>
        </div>
      </div>
      <button
        onClick={() => {
          addToCartHandler(props.product);
        }}
        className="cart-btn"
      >
        Add to Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
