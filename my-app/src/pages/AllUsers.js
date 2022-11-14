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

function AllUsers() {
  const [users, setusers] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get('https://housingsociety0104.herokuapp.com/users')).data;
      setusers(data);
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
              <th>Id</th>
              <th>Username</th>
              <th>Email</th>
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.length && (users.map((user, i) => {
              return <tr key={i}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.admin ? "Yes" : "No"}</td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllUsers;
