import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {

    const isLoggedIn = JSON.parse(localStorage.getItem('auth'));

    return (
      <div>
        <Link to="users">Users</Link>
        <Link to="resources">Resources</Link>
        <Link to="bookings">Bookings</Link>
        {isLoggedIn ? <Link to="logout">Logout</Link>:<Link to="login">Login</Link>}
      </div>
    )
  }
}
