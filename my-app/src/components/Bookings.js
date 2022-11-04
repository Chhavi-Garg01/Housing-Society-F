import React, { Component } from 'react'

class Bookings extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }
    componentDidMount() {
        fetch('http://127.0.0.1:8000/bookings').then((result) => {
            result.json().then((data) => {
                this.setState({ items: data })
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span>Resource<span className="tab"></span> user_id Date <span className="tab"></span> Booked</span>
                {
                    this.state.items ?
                        this.state.items.map((item, i) =>
                            <div key={i}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>{item.id}</th>
                                            <td>{item.resource_name}</td>
                                            <td>{item.Date_Booked}</td>
                                            <td>{item.user_id}</td>
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

export default Bookings;
