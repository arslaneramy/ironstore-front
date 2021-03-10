import React from "react";


const Cart = ({ product, qty }) => {

    console.log('product', product)

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
        <small>Amount: {product.qty}</small>
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default Cart;