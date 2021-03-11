import React from "react";
import { Link } from "react-router-dom";
// import { withAuth } from './../../context/auth-context';
import CartItem from "../../components/CartItem/CartItem";
import Product from "./../../components/Products/Product";
import productService from "./../../services/products-service";
import cartService from "./../../services/cart-service";

class CartScreen extends React.Component {
  state = {
    cart: [],
  };
  //   addToCart = async () => {
  //     let data = await cartService.getCart();
  //     const cart = response.data
  //     this.setState({ cart: data });
  //   };

  componentDidMount() {
    this.addToCart();
  }

  addToCart = () => {
    cartService.getCart().then((data) => {
      const cart = data;
      // console.log("dataaaaa", cart);
      // console.log(data);
      this.setState({ cart: cart });
    });
  };

  removeFromCart = (productId) => {
    cartService
      .removeItem(productId)
      .then((data) => {
        const cartCopy = [...this.state.cart];
        const filteredCart = cartCopy.filter(
          (item) => item.product._id !== productId
        ); // filters out the deleted item from cartCopy and creates new array
        this.setState({ cart: filteredCart });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { cart } = this.state;
    console.log("this.state.cart", this.state.cart);
    const cartIsEmpty = cart.length === 0;
    return (
      <div className="">
        <h2> Your cart {cartIsEmpty ? "is empty" : ":"} </h2>

        {!cartIsEmpty && (
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        )}

        {cart.map((item) => (
          <CartItem
            key={item.product._id}
            product={item.product}
            qty={item.qty}
            removeFromCart={this.removeFromCart}
          />
        ))}
      </div>
    );
  }
}
export default CartScreen;
