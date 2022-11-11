import React, { useState, useEffect } from 'react';
import axios from "axios";

import Loader from '../components/Loader';

const token = JSON.parse(localStorage.getItem("auth"));

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

function AllBookings() {
  const [bookings, setbookings] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get('http://127.0.0.1:8000/bookings')).data;
      setbookings(data);
      setloading(false);
    }
    catch (error) {
      setloading(false);
    }
  }, [])

  return (
    <div className='row'>
      <div className='col-md-10'>
        {loading && (<Loader />)}
        <table className='table table-bordered bookTable '>
          <thead className='bs thead-dark'>
            <tr>
              <th>Booking Id</th>
              <th>Resource Id</th>
              <th>User Id</th>
              <th>Resource</th>
              <th>Date Booked</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length && (bookings.map((booking, i) => {
              return <tr key={i}>
                <td>{booking.id}</td>
                <td>{booking.res_id}</td>
                <td>{booking.user_id}</td>
                <td>{booking.resource_name}</td>
                <td>{booking.Date_Booked}</td>
                <td>{booking.status}</td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllBookings;
