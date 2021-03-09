import React from 'react';
import { Link } from "react-router-dom";
import withCartContext from "../../context/cart-context"

import CartItem from "./../../components/Cart/Cart";

const Cart = (props) => {
    const { cart } = props.context;
    console.log("props.context from Cart detail:>> ", props.context);
    const cartKeys = Object.keys(cart || {});
    console.log("cartKeys :>> ", cartKeys, cart);
    return (
      <div className="cartDiv">
        <div className="">
          <div className="">
            <h4 className="title">My Cart</h4>
          </div>
        </div>
        <br />
        <div className="container">
          {cartKeys.length ? (
            <div className="cartItemDiv">
              {cartKeys.map((key) => (
                <CartItem
                  cartKey={key}
                  key={key}
                  cartItem={cart[key]}
                  removeFromCart={props.context.removeFromCart}
                />
              ))}
              <div className="">
                <br />
                <div className="">
                  <button onClick={props.context.clearCart} className="">
                    Clear cart
                  </button>{" "}
                  <button className="" onClick={props.context.checkout}>
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="noItemsCart">
              <div className="">No item in cart!</div>
              <div className="">
                <Link to="/products/list">Go to products</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

export default withCartContext(Cart);