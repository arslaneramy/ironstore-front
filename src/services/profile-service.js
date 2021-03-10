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
  getOneUser = async (
    firstName,
    lastName,
    password,
    email,
    shippingAddress,
    id
  ) => {
    try {
      let response = await this.profile.get(`/api/profile/${id}`, {
        firstName,
        lastName,
        password,
        email,
        shippingAddress,
      });
      return response.data;
    } catch (err) {
      console.log(err);
    }
  };
  editProfile = async (
    firstName,
    lastName,
    email,
    password,
    shippingAddress
  ) => {
    try {
      console.log(firstName, lastName, email, password, shippingAddress);
      let response = await this.profile.post('api/edit-profile', //put or post??
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
}
const profileService = new ProfileService();
export default profileService;
