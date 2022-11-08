import React, { Component } from 'react'

class Bookings extends Component {
    constructor() {
        super()
        this.state = {
            bookings: null
        }
    }
    componentDidMount() {
        let token= "Bearer "+JSON.parse(localStorage.getItem('auth'));
        fetch('http://65.2.125.207:8000/bookings', {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json",
                "Authorization":token
            }
        }).then((result) => {
            result.json().then((data) => {
                this.setState({ bookings: data })
            })
        })
    }
    render() {
        return (
            <div>
                <span> id<span className="tab"></span>Resource<span className="tab"></span> Date Booked<span className="tab"></span> user_id</span>
                {
                    this.state.bookings ?
                        this.state.bookings.map((booking, i) =>
                            <div key={i}>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>{booking.id}</td>
                                            <td>{booking.resource_name}</td>
                                            <td>{booking.Date_Booked}</td>
                                            <td>{booking.user_id}</td>
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
