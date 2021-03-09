// import React, { Component } from "react";
// import { withAuth } from '../../context/auth-context';

// class Profile extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Profile Page</h1>
//         <h2>Welcome {this.props.user && this.props.user.firstName}</h2>
//         {/* 
//         <h2>Welcome {this.props.user ? this.props.user.username : null }</h2> 
//         */}

//       </div>
//     );
//   }
// }


// export default withAuth(Profile);

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
        <div>
          {/* <p>Username: {this.props.user.username}</p> 
           <p>Email: {this.props.user.email}</p> */}
          <button onClick={this.toggleEdit}>Edit</button>
          {this.state.showEdit ? <EditProfile /> : null}
        </div>
 
      </div>
    );
  }
}
export default withAuth(Profile);
