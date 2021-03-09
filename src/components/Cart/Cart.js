import React from "react";

const CartItem = (props) => {
  const { cartItem, cartKey } = props;
  console.log("cartItem from CartItem :>> ", cartItem);
  console.log("cartKey from CartItem :>> ", cartKey);

  const { product, qty } = cartItem;
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
        <small>Amount: {qty}</small>
      </div>
      <div
      
        onClick={() => props.deleteCart(cartKey)}
      >
   
      </div>
    </div>
  );
};

export default CartItem;