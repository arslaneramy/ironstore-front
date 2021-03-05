import React, { useEffect, useState } from "react";
// import Product from "./../../components/Products/Product";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const bringProducts = async () => {
      const { data } = await axios.get("/api/products");

      setProducts(data);
    };

    bringProducts();
  }, []);

  return (
    <div>
      <h1>Most popular products</h1>
      {products.map((product) => (
        <div className="imgContainer" >
          <h3>{product.name}</h3>
          <img className="imgProduct" src={product.img} />
          <h3>{product.description}</h3>
          <h3>{product.price}</h3>
          <h3>{product.reviews}</h3>
          <h3>{product.countInStock}</h3>
        </div>
      ))}
    </div>
  );
};

export default Home;
