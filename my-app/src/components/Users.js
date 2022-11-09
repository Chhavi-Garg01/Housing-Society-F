import React, { Component } from "react";

class Users extends Component {
    constructor(){
        super()
        this.state={
            users:null
        }
    }
    componentDidMount()
    {
        let token= "Bearer "+JSON.parse(localStorage.getItem('auth'));
        fetch('https://housing-society0104.herokuapp.com/users', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization":token
            }
        }).then((result)=>{
            result.json().then((data)=>{
                this.setState({users:data})
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span><span className="tab"></span> Email <span className="tab"></span><span className="tab"></span>Username</span>
                {
                    this.state.users?
                    this.state.users.map((user,i)=>
                    <div key={i}>
                        <table>
                            <tbody>
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    ):null
                }
            </div>
        )
    }
}
export default Users;