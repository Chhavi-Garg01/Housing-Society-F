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

function AllResources() {
  const [resources, setresources] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(async () => {
    try {
      setloading(true);
      const data = (await axios.get('https://housingsociety0104.herokuapp.com/resources')).data;
      setresources(data);
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
              <th>Resource Id</th>
              <th>Resource</th>
              <th>Amount</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {resources.length && (resources.map((resource, i) => {
              return <tr key={i}>
                <td>{resource.id}</td>
                <td>{resource.resource_name}</td>
                <td>{resource.amount}</td>
                <td>{resource.availability}</td>
              </tr>
            }))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AllResources;
