import React, { Component } from "react";
import { withAuth } from './../../context/auth-context';
import { Link } from "react-router-dom";
import EditProfile from "../../components/EditProfile/EditProfile";


class Profile extends Component {
  state = {
    showEdit: false,
  };

  toggleEdit = () => {
    this.setState({ showEdit: !this.state.showEdit });
  };
  
  render() {
    console.log(this.props.user);
    return (
      <div className="user-details">
        <h2>Welcome {this.props.user && this.props.user.firstName}</h2>
        <div className="profileContainer" >
          <p> Data Account: </p>
          <p>Name: {this.props.user.firstName}</p> 
          <p>Email: {this.props.user.email}</p>
          <p>Address: {this.props.user.shippingAddress}</p> 
          <br/>
          <p>Do you want to edit your profile?</p>
          <button onClick={this.toggleEdit}>Edit</button>

          {this.state.showEdit ? <EditProfile /> : null}
        </div>
 
      </div>
    );
  }
}
export default withAuth(Profile);
