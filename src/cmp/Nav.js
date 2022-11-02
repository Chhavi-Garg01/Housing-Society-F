import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="home">Home</Link>
        <Link to="about">About</Link>
        <Link to="list">Listing</Link>
        <Link to="/">Login</Link>

      </div>
    )
  }
}
