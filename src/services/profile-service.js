import axios from "axios";
// THIS IS AN EXAMPLE THAT YOU CAN USE
// TO CREATE A SERVICE FOR YOUR AXIOS CALLS
class ProfileService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.profile = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true,
    });
  }
  getOneUser = async () => {
    try {
      let response = await this.profile.get(`/api/users/edit`);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };

  editProfile = async (
    email,
    password,
    firstName,
    lastName,
    shippingAddress,
  ) => {
    // async function by default returns a promise
    // so it is not needed to return a promise explicitly
    // like we do with then/catch promise syntax
    try {
      let response = await this.profile.put('/api/users', 
      {
        firstName,
        lastName,
        email,
        password,
        shippingAddress,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };


  editProfileP =  (
    email,
    password,
    firstName,
    lastName,
    shippingAddress,
  ) => {

      const pr = this.profile.put('/api/users', 
      {
        firstName,
        lastName,
        email,
        password,
        shippingAddress,
      })
      .then((response) => response.data)
      .catch((err)=> console.log(err));

      return pr;

  };



}
const profileService = new ProfileService();
export default profileService;
