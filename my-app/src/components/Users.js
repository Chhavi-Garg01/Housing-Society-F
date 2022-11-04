import React, { Component } from "react";

class Users extends Component {
    constructor(){
        super()
        this.state={
            items:null
        }
    }
    componentDidMount()
    {
        fetch('http://127.0.0.1:8000/users').then((result)=>{
            result.json().then((data)=>{
                this.setState({items:data})
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span><span className="tab"></span> Email <span className="tab"></span><span className="tab"></span>Username</span>
                {
                    this.state.items?
                    this.state.items.map((item)=>
                    <div>
                        <table>
                            <tr>
                                <th>{item.id}</th>
                                <td>{item.email}</td>
                                <td>{item.username}</td>
                                <td>{item.availability}</td>
                            </tr>
                        </table>
                    </div>
                    ):null
                }
            </div>
        )
    }
}
export default Users;