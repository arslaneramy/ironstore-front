import React from "react";
import { Link } from "react-router-dom";
// import { withAuth } from './../../context/auth-context';
import Cart from "./../../components/Cart/Cart";
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
  render() {
    const { cart } = this.state;
    console.log("this.state.cart", this.state.cart);
    return (
      <div className="">
        <h2> Your cart : </h2>
        {cart.map((item) => (
          <Cart key={item.product._id} product={item.product} qty={item.qty} />
        ))}

     
      </div>
    );
  }
}
export default CartScreen;