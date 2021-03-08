import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from "axios";

const ProductScreen = ({ match }) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        const bringProduct = async () => {
          const { data } = await axios.get(`/api/products/${match.params.id}`);
    
          setProduct(data);
        };
    
        bringProduct();
      }, []);


    return (
        <div>
            <Link to ="/">
                Go Back
            </Link>
            
            <img className="imgProductScreen" src={product.img} alt={product.name} />


        </div>
    )
}

export default ProductScreen;