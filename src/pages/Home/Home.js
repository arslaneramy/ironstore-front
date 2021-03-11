import React from "react";
import Product from "./../../components/Products/Product";
import axios from "axios"; // http library
import productService from "./../../services/products-service";
import { Link } from "react-router-dom";

// products on component level state, not on global state yet, maybe do it with redux ?

class Home extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = () => {
    productService.getAll().then((response) => {
      const products = response.data.splice(0, 4);
      // console.log("PRODUCT!", products );
      this.setState({ products: products });
    });
  };

  // make a request to our backend using useEffect

  render() {
    const { products } = this.state;
    console.log("this.state.products", this.state.products); //{} --> _proto_: Object
    return (
      <div className="homeContainer">
        <div className="description">
          <h2 className="welcomeMessage">
            Hi! Welcome to Iron Store, here you can buy our merchandise from
            ironHack{" "}
          </h2>
          <div className="rowArticle">
            <article>
              <img src="/img/shipping.png" width="150" alt="shippingImg"></img>
              <h4>We deliver wherever you are</h4>
            </article>
            {/* <br/> */}
            <article>
              <img
                src="/img/credit-card-icon.png"
                width="150"
                alt="creditcardImg"
              ></img>
              <h4>pay with any credit card</h4>
            </article>
          </div>

          <br />
          <div className="welcomeMessage2">
          <h4> Do you, Ironhacker, need a cup to take your coffee in the morning? </h4>
          <h4> Or do you just want your cell phone to look amazing? </h4>
          <h4> Find that and much more here! </h4>
          </div>
          {/* we dont have yet the list products */}
          <Link to={`/products/list`}>
            <button className="home-button">All Products</button>
          </Link>
        </div>

        <h1 className="popularProducts" >Most popular products</h1>
        <div className="productContainer" >
          {products.map((product) => (
          <Product key={product._id} product={product} />
          ))}
        </div>

      </div>
    );
  }
}

export default Home;
