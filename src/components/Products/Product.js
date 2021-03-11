import React from 'react';
import { Link } from "react-router-dom";

const Product =  ({ product }) => {
    return(
      <div className="imgContainer" >
        <div  >
          <h3>{product.name}</h3>
          <Link to={`/product/${product._id}`}>
            <img className="imgProduct" src={product.img} />
          </Link>
          <h3>{product.description}</h3>
          <h3>{product.price} $</h3>
          {/* <h3>{product.reviews}</h3> */}
       
        </div>

      </div>
    )
}

export default Product;