import React, { useEffect, useState } from "react";
import Product from "./../../components/Products/Product";
import axios from "axios"; // http library
import productService from './../../services/products-service';

// products on component level state, not on global state yet, maybe do it with redux ?

const Home = () => {
  const [products, setProducts] = useState([]);

  // make a request to our backend using useEffect
  useEffect(() => {
    const bringProducts = async () => {
      const { data } = await productService.getAll()

      setProducts(data);

      // this.setState({ products: data.splice(0, 6)})
    };

    bringProducts();
  }, []); // array of dependencies, nothing there for now

  return (
    <div className="">
      <h1>Most popular products</h1>
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default Home;
