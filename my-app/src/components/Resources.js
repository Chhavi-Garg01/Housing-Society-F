import React, { Component } from "react";

class Resources extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/resources').then((result) => {
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
                    this.state.items?
                    this.state.items.map((item)=>
                    <div>
                        <table>
                            <tr>
                            <td>{item.id}</td>
                            <td>{item.resource_name}</td>
                            <td>{item.amount}</td>
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
export default Resources;

