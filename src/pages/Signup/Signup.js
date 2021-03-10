import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";
class Signup extends Component {
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
    this.props.signup(email, password, firstName, lastName, shippingAddress);
  };
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const {
      email,
      password,
      firstName,
      lastName,
      shippingAddress,
    } = this.state;
    return (
      <div>
        <h1 className="signup">Sign Up</h1>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <div className="">
            <label>E-mail:</label>
            <input
              type="text"
              name="email"
              placeholder="Enter E-mail"
              value={email}
              onChange={this.handleChange}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={this.handleChange}
            />
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter name"
              value={firstName}
              onChange={this.handleChange}
            />
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={lastName}
              onChange={this.handleChange}
            />
            <label>shipping Address:</label>
            <input
              type="text"
              name="shippingAddress"
              placeholder="Enter Address"
              value={shippingAddress}
              onChange={this.handleChange}
            />
            <input type="submit" value="Signup" />
          </div>
          <div>
            <br></br>
            <p> Already have account? </p>
            <Link to={"/login"}> Login </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default withAuth(Signup);
// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;
