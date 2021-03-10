
import React from 'react';
import { Link } from "react-router-dom";
// import { withAuth } from './../../context/auth-context';
import CartItem from "./../../components/Cart/Cart";
import productService from './../../services/products-service';
import cartService from './../../services/cart-service';
import profileService from '../../services/profile-service';



class Cart extends React.Component {
    state = {
        product : {},
        qty : 0
    }


AddToCart = async () => {
  
    let { data } = await cartService.getCart();

    this.setState({ product: data});
}


componentDidMount(){
    this.AddToCart();

}
  
    render() {
        const { product, qty } = this.state;
   
      return (
        <div className="user-details">
          <h2>Your cart :</h2>
          <div>
    
         <h3></h3>
        
          
          </div>
          </div>
      )}}

export default Cart;