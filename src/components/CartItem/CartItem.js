import React from "react";
import cartService from "../../services/cart-service";
import productService from "../../services/products-service";


const CartItem = ({ product, qty, removeFromCart }) => {

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
          {product.name} <span className="">Amount : €{product.price}</span>
        </b>
        <div>{product.description}</div>
        <small>Amount: {product.qty}</small>
        <button onClick={()=> removeFromCart(product._id) } > Remove item </button>
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default CartItem;