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
        <h3>{product.name}</h3>
      ))}
    </div>
  );
};

export default Home;