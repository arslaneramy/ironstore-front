import React from "react";

const Cart = ({ product, qty }) => {
  return (
    <div className="cartItem">
      <div className="">
        <figure>
          <img
            src={product.img}
        />
        </figure>
      </div>
      <div className="">
        <b>
          {product.name} <span className="">€{product.price}</span>
        </b>
        <div>{product.description}</div>
        <div>{product.price} $</div>
        <small>Amount: {qty} </small>
      </div>
      
    </div>
  );
};

export default Cart;