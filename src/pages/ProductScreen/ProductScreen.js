import React from 'react'
import { Link } from "react-router-dom";

import productService from './../../services/products-service';

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

      render() {
        const { product } = this.state;
        return (
            <div>
    
            <img className="imgProductScreen" src={product.img} alt={product.name} />
             <br></br>
                <Link to ="/">
                    <button>Go Back</button>
                </Link>
    
                <Link to ="/users/cart">
                <button>Add to cart</button>
                </Link>
    
            </div>
        )
    }
}

export default ProductScreen;