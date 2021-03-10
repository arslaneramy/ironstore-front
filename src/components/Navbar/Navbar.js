import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth-context";
class Navbar extends Component {
  render() {
    // const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        <Link to={"/"} id="home-btn">
          {/* insert logo */}
          <h4>
            <img src="/img/ironlogo.png" className="logo" alt="logo" />
            Home
          </h4>
        </Link>
        {this.props.isLoggedIn ? (
          <>
            <p>email: {this.props.user && this.props.user.email}</p>
            <button onClick={this.props.logout}>Logout</button>
              <button>Cart</button>
            <Link to={"/profile"}>
              <button>Profile</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
          </>
        )}
      </nav>
    );
  }
}
export default withAuth(Navbar);
