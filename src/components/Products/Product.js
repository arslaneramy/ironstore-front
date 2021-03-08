import React from 'react';
import { Link } from "react-router-dom";

const Product =  ({ product }) => {
    return(
        <div>
        <div className="imgContainer" >
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


// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';


// export default function Products(props) {
//   const { product } = props;
//   return (
//     <div key={product._id} className="card">
//       <a href={`/product/${product._id}`}>
//         <img className="medium" src={product.img} alt={product.name} />
//       </a>
//       <div className="card-body">
//         <a href={`/product/${product._id}`}>
//           <h2>{product.name}</h2>
//         </a>
//         {/* <Rating
//           rating={product.rating}
//           numReviews={product.numReviews}
//         ></Rating> */}
//         <div className="price">${product.price}</div>
//       </div>
//     </div>
//   );
// };