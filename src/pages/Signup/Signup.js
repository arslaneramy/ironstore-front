import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from './../../context/auth-context';

class Signup extends Component {
  state = { 
  email: "" ,
  password: "" ,
  firstName:"" ,
  lastName:"" ,
  shippingAddress:"" 
 };

  

  handleFormSubmit = event => {
    event.preventDefault();
    const { email, password, firstName, lastName, shippingAddress } = this.state;
    
    this.props.signup( email, password, firstName, lastName, shippingAddress);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password, firstName, lastName, shippingAddress } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>

          <label>email:</label>
          <input type="text" name="email" value={email} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <label>First Name:</label>
          <input type="text" name="firstName" value={firstName} onChange={this.handleChange} />

          <label>Last Name:</label>
          <input type="text" name="lastName" value={lastName} onChange={this.handleChange} />

          <label>shipping Address:</label>
          <input type="text" name="shippingAddress" value={shippingAddress} onChange={this.handleChange} />

          <input type="submit" value="Signup" />
        </form>
        
        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}



export default withAuth(Signup);


// const EnhancedSignup = withAuth(Signup)
// export default EnhancedSignup;