import React, { Component } from "react";

class Resources extends Component {
    constructor() {
        super()
        this.state = {
            resources: null
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
                this.setState({ resources: data })
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span> Resource <span className="tab"></span>Amount<span className="tab"></span>Availability</span>
                {
                    this.state.resources ?
                        this.state.resources.map((resource,i) =>
                            <div key={i}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{resource.id}</td>
                                            <td>{resource.resource_name}</td>
                                            <td>{resource.amount}</td>
                                            <td>{resource.availability}</td>
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

