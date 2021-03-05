import React, { Component } from "react";
import { withAuth } from '../../context/auth-context';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile Page</h1>
        <h2>Welcome {this.props.user && this.props.user.firstName}</h2>
        {/* 
        <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
        */}

      </div>
    );
  }
}


export default withAuth(Profile);
