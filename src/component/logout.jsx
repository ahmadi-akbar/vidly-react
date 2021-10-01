import React, { Component } from "react";
import auth from "../services/authService";
// import Logout from "./logout";

class Logout extends Component {
  state = {};

  componentDidMount() {
    auth.logout();
    window.location = "/";
  }
}

export default Logout;
