import React, { Component } from "react";

class Resources extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        let token= "Bearer "+JSON.parse(localStorage.getItem('auth'));
        fetch('http://127.0.0.1:8000/resources', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization":token
            }
        }).then((result) => {
            result.json().then((data) => {
                this.setState({ items: data })
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span> Resource <span className="tab"></span>Amount<span className="tab"></span>Availability</span>
                {
                    this.state.items ?
                        this.state.items.map((item,i) =>
                            <div key={i}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.resource_name}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.availability}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : null
                }
            </div>
        )
    }
}
export default Resources;

