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
        console.log("PRODUCT!",product);
        
        return (
            <div>
    
            <img className="imgProductScreen" src={product.img} alt={product.name} />
             <br></br>
                <Link to ="/">
                    <button>Go Back</button>
                </Link>
    
                
                <button onClick={()=> this.addProduct()} >Add to cart</button>
                
    
            </div>
        )
    }
}

export default ProductScreen;