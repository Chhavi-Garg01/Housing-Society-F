import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";

import Loader from '../components/Loader';

function MyBookings() {
    const token = JSON.parse(localStorage.getItem("auth"));
    const [booking, setbooking] = useState();
    const [loading, setloading] = useState(false);

    axios.interceptors.request.use(
        config => {
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    )

    useEffect(async () => {
        setloading(true);
        axios.get('https://housingsociety0104.herokuapp.com/user_bookings')
            .then(function (response) {
                setbooking(response.data)
                setloading(false);
            })
            .catch(function (error) {
                setloading(false);
            });

    }, [])

    async function updateBooking(id, status) {
        setloading(true);
        axios.patch(`https://housingsociety0104.herokuapp.com/bookings/${id}`, { id, status })
            .then(function (response) {
                setloading(false);
                Swal.fire("Congrats", "Your booking is updated", "success").then(result => {
                    window.location.reload();
                })
            })
            .catch(function (error) {
                setloading(false);
                Swal.fire("Oops", "Something went wrong!", "error");
            });
    }

    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    {loading && (<Loader />)}
                    {booking && (booking.map((booking, i) => {
                        return <div key={i} className="bs">
                            <h1>{booking.resource_name}</h1>
                            <p><b>Booking_id:</b> {booking.id}</p>
                            <p><b>Resource:</b> {booking.resource_name}</p>
                            <p><b>Date:</b> {booking.Date_Booked}</p>
                            {booking.status == "Cancelled" ?
                                <p><b>Status:</b> <span style={{ color: "red" }}>{booking.status}</span></p>
                                :
                                <p><b>Status:</b> <span style={{ color: "green" }}>{booking.status}</span></p>
                            }
                            {booking.status == "Cancelled" ?
                                <div className='text-right'>
                                    <button className='btn' onClick={() => { updateBooking(booking.id, "Successfull") }}>BOOK AGAIN</button>
                                </div>
                                :
                                <div className='text-right'>
                                    <button className='btn' onClick={() => { updateBooking(booking.id, "Cancelled") }}>CANCEL BOOKING</button>
                                </div>
                            }
                        </div>
                    }))}
                </div>
            </div>
        </div>
    )
}

export default MyBookings;
