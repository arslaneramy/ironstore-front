import React, { Component } from "react";
import { withAuth } from "./../../context/auth-context";
import { Link } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";
import profileService from "./../../services/profile-service";

class Profile extends Component {
  state = {
    showEdit: false,
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    shippingAddress: "",
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    profileService
      .getOneUser()
      .then((data) => {
        const { firstName, lastName, email, password, shippingAddress } = data;
        this.setState({
          firstName,
          lastName,
          email,
          password,
          shippingAddress,
          showEdit: false
        });
        this.props.me() //this refresh user data in AuthProvider
      })
      .catch((err) => console.log(err));
  }

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };

  render() {
    console.log(this.props.user);
    return (
      <div className="user-details">
        <h2>Welcome {this.state.firstName}</h2>
        <div className="profileContainer">
          <p> Profile Account: </p>
          <p>Name: {this.state.firstName}</p>
          <p>Email: {this.state.email}</p>
          <p>Address: {this.state.shippingAddress}</p>
          <br />
          <p>Do you want to edit your profile?</p>
          <button className="home-button" onClick={this.toggleEdit}>Edit</button>

          {this.state.showEdit ? <EditProfile loadUser={this.loadUser} /> : null}
        </div>
      </div>
    );
  }
}

export default withAuth(Profile);
