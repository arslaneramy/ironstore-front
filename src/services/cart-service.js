import axios from "axios";

// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS

class CartService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.apiCart = axios.create({
      baseURL: "http://localhost:5000/api/users/cart",
      withCredentials: true,
    });
  }

  getCart = (id) => {
    const pr = this.apiCart.get('/');  // http://localhost:5000/api/users/cart 

    return pr;
  };

}

// Create instance (object) containing all axios calls as methods
const cartService = new CartService();

export default cartService;
