import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class ProductService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.apiProducts = axios.create({
      baseURL:  process.env.REACT_APP_API_URL + "/api/products",
      withCredentials: true,
    });
  }



  getOne = (id) => {
    const pr = this.apiProducts.get(`/${id}`);  // http://localhost:5000/api/products  + /id

    return pr;
  };


  getAll = () => {
      const pr = this.apiProducts.get("/"); // http://localhost:5000/api/products 

      return pr
  };

  getList = () => {
    const pr = this.apiProducts.get("/list"); // http://localhost:5000/api/products + /list

    return pr
};
}

// Create instance (object) containing all axios calls as methods
const productService = new ProductService();

export default productService;
