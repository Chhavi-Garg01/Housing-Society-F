import React, { useState } from 'react';
import axios from 'axios';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

const token = JSON.parse(localStorage.getItem("auth"))

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

function BookingScreen() {
  const [resource_name, setresource] = useState('');
  const [Date_Booked, setdate] = useState('');
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();
  const [detail, setDetail] = useState('');

  async function booking() {
    const book = {
      resource_name,
      Date_Booked
    };
    setloading(true);
    axios.post('http://127.0.0.1:8000/bookings', book)
      .then(function (response) {
        setloading(false);
        setDetail(response.data.message)
        setsuccess(true);
        setresource('');
        setdate('');
      })
      .catch(function (error) {
        setDetail(error.response.data.detail);
        setloading(false);
        seterror(true);
      });
  }

  return (
    <div>
      {loading && (<Loader />)}

      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>
          {error && (<Error message={detail} />)}
          {success && (<Success message={detail} />)}

          <div className='bs'>
            <h2>BOOK RESOURCE NOW !</h2>
            <input type="text" className="form-control" placeholder="resource_name"
              value={resource_name} onChange={(e) => { setresource(e.target.value) }} />
            <input type="date" className="form-control" placeholder="Date_Booked"
              value={Date_Booked} onChange={(e) => { setdate(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={booking}>BOOK</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingScreen;
