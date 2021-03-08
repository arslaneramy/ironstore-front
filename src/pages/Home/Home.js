import React, { useEffect, useState } from "react";
import Product from "./../../components/Products/Product";
import axios from "axios"; // http library
import productService from "./../../services/products-service";
import { Link } from "react-router-dom";
// products on component level state, not on global state yet, maybe do it with redux ?
const Home = () => {
  const [products, setProducts] = useState([]);
  // make a request to our backend using useEffect
  useEffect(() => {
    const bringProducts = async () => {
      const { data } = await productService.getAll();
      setProducts(data);
      // this.setState({ products: data.splice(0, 6)})
    };
    bringProducts();
  }, []); // array of dependencies, nothing there for now
  return (
    <div className="">
      <div className="description">
        <h2>
          Hi! Welcome to Iron Store, here you can buy our merchandise from
          ironHack{" "}
        </h2>
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
        <Link to={`/product/list`}>
          {" "}
          <button> All Products </button>{" "}
        </Link>
      </div>
      <h1>Most popular products</h1>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};
export default Home;