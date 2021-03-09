import React, { Component } from "react";
import ProfileService from "../../services/profile-service";
import { withAuth } from './../../context/auth-context';
class EditProfile extends Component {
  state = {
    firstName: "",
    lastName: "",
    password: "",
    email: "",
    shippingAddress: ""
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, shippingAddress } = this.state;
    const { _id } = this.props.user;
    ProfileService.editProfile(firstName, lastName, email, password, shippingAddress, _id);
  };
  handleChange = (event) => {
    let { name, value } = event.target;
   
    this.setState(() => ({ [name]: value }));
  };
  render() {
   
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>first name: </label>
          <input
            type="text"
            name="firstName"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label>email:</label>
          <textarea
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>password:</label>
          <textarea
          type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withAuth(EditProfile);
