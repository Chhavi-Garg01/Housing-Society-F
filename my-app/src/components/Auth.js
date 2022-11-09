import React, { Component } from "react";
import { Navigate } from "react-router-dom";

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            isRegister: false
        }
    }
    login() {
        fetch('https://housing-society0104.herokuapp.com/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                localStorage.setItem("auth", JSON.stringify(response.token));
            })
        })
    }

    register() {
        fetch('https://housing-society0104.herokuapp.com/signup', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then((result) => {
            result.json().then((response) => {
                localStorage.setItem("auth", JSON.stringify(response.access))
               
            })
        })
    }

    render() {

        var auth = JSON.parse(localStorage.getItem('auth'));

        return (
            <div>
                {
                    auth ? <Navigate to="/resources" />:null
                }
                {
                    !this.state.isRegister ?
                        <div>
                            <input type="text" placeholder="email"
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            /><br /><br />
                            <input type="text" placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            /><br /><br />
                            <button onClick={() => this.login()}>LOGIN</button>
                            <button onClick={() => this.setState({ isRegister: true })}>go to REGISTER</button>
                        </div>
                        :
                        <div>
                            <input type="text" placeholder="username"
                                onChange={(e) => { this.setState({ username: e.target.value }) }}
                            /><br /><br />
                            <input type="text" placeholder="email"
                                onChange={(e) => { this.setState({ email: e.target.value }) }}
                            /><br /><br />
                            <input type="text" placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }}
                            /><br /><br />
                            <input type="text" placeholder="admin"
                                onChange={(e) => { this.setState({ admin: e.target.value }) }}
                            /><br /><br />
                            <button onClick={() => this.register()}>REGISTER</button>
                            <button onClick={() => this.setState({ isRegister: false })}>go to login</button>
                        </div>
                }
            </div>
        );
    }
}
export default Auth;