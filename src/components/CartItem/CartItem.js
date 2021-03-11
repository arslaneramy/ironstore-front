import React from "react";
import cartService from "../../services/cart-service";
import productService from "../../services/products-service";


const CartItem = ({ product, removeFromCart }) => {

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
          {product.name} <span className="">Price : €{product.price}</span>
        </b>
        <div> {product.description} </div>
        <small> {product.qty}</small>
        <button className="home-button" onClick={()=> removeFromCart(product._id) } > Remove item </button>
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default CartItem;