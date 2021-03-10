import React, { Component } from "react";
import "./App.css";
import Product from "././components/Products/Product";

import { Switch, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProductScreen from "./pages/ProductScreen/ProductScreen";
import ListScreen from "./pages/ListScreen/ListScreen";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import CartScreen from "./pages/CartScreen/CartScreen";

// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/users/cart" component={CartScreen} />
          <Route path="/products/list" component={ListScreen} />
          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/profile" component={Profile} />
        </Switch>
      </div>
    );
  }
}

export default App;
