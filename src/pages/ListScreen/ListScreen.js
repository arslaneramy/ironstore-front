import React from "react";
import Product from "./../../components/Products/Product";
import axios from "axios"; // http library
import productService from "./../../services/products-service";
import { Link } from "react-router-dom";

// products on component level state, not on global state yet, maybe do it with redux ?

class List extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    productService.getAll().then((response) => {
      const products = response.data;
      // console.log("PRODUCT!", products );
      this.setState({ products: products });
    });
  };

  // make a request to our backend using useEffect

  render() {
    const { products } = this.state;
    console.log("this.state.products", this.state.products); //{} --> _proto_: Object
    return (
      <div className="">
        <div className="description">
          <h2>Hi ! This is the product list </h2>
          <div className="rowArticle">
            <article>
              <img src="/img/shipping.png" width="150"></img>
              <h4>We deliver wherever you are</h4>
            </article>
            {/* <br/> */}
            <article>
              <img src="/img/credit-card-icon.png" width="150"></img>
              <h4>pay with any credit card</h4>
            </article>
          </div>

          <br />
          <h4> Do you need a cup to take your coffee in the morning? </h4>
          <h4> Or do you just want your cell phone to look amazing? </h4>
          <h4> find that and much more here! </h4>
          {/* we dont have yet the list products */}
          
        </div>

        
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    );
  }
}

export default List;
