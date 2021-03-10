import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class CartService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.apiCart = axios.create({
      baseURL: process.env.REACT_APP_API_URL + "/api/users/cart",
      withCredentials: true,
    });
  }

  //get the cart
  getCart = async () => {
    try {
      let response = await this.apiCart.get('/');  // http://localhost:5000/api/users/cart 
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Add product by Id to the cart
  updateCart = async (productId, qty) => {
    try {
      let response = await this.apiCart.put("/", { 
     productId, qty
    });
      return response.data;
      }
        catch (err) {
      console.log(err);
    }
  };

  deleteCart = async (productId) => {
    try {
      let response = await this.apiCart.delete(`/${productId}`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }

}

// Create instance (object) containing all axios calls as methods
const cartService = new CartService();

export default cartService;
