import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';

export default class Logout extends Component {
   
    componentDidMount() {
        localStorage.removeItem("auth");
    }
  render() {
    var auth = JSON.parse(localStorage.getItem('auth'));
    return (
      <div>
        {
            auth ? <Navigate to="/login" />:null
        }
        YOU ARE LOGGED OUT REFRESH TO LOGIN AGAIN
      </div>
    )
  }
}
