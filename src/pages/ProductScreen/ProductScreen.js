import React from 'react'
import { Link } from "react-router-dom";
import productService from './../../services/products-service';
import cartService from './../../services/cart-service';


class ProductScreen extends React.Component  {
    state = {
        product: {}
    }


     bringProduct = async () => {
        const { match } = this.props;
        const { data } = await productService.getOne(match.params.id);


        this.setState({ product: data});
    }
      componentDidMount(){
        this.bringProduct();
      }

      addProduct(){
        cartService.updateCart(this.state.product._id, 1);
      }

      render() {
        const { product } = this.state;
        // console.log("PRODUCT!",product);
        
        return (
            <div className="oneProduct" >

              <h3>{product.name}</h3>
              <h3>{product.price} $</h3>

              <img className="imgProductScreen" src={product.img} alt={product.name} />
              <h6>Description: {product.description} </h6>
              <br></br>
              <Link to ="/products/list">
                <button className="home-button" >Go Back</button>
              </Link>
                
              <button className="home-button" onClick={()=> this.addProduct()} >Add to cart</button>
              
    
            </div>
        )
    }
}

export default ProductScreen;