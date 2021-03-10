import React, { Component } from "react";
import ProfileService from "../../services/profile-service";
import { withAuth } from "./../../context/auth-context";
class EditProfile extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    shippingAddress: "",
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      email,
      password,
      firstName,
      lastName,
      shippingAddress,
    } = this.state;
    const { _id } = this.props.user;
    ProfileService.editProfile(
      email,
      password,
      firstName,
      lastName,
      shippingAddress,
      _id
    );
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form
          className="form"
          onSubmit={this.handleFormSubmit}
          method="POST"
          encType="multipart/form-data"
        >
          <label> first name: </label>
          <input
            placeholder="Enter new Name"
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label>email:</label>
          <input
            placeholder="Enter new E-mail"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>password:</label>
          <input
            placeholder="Enter new password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label> shipping Address: </label>
          <input
            placeholder="Enter new Address"
            type="text"
            name="shippingAddress"
            value={this.state.shippingAddress}
            onChange={this.handleChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default withAuth(EditProfile);
