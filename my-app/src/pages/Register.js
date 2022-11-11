import React, { useState } from 'react';
import axios from 'axios';

import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

function Register() {
  const [username, setusername] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();
  const [detail, setDetail] = useState('');

  async function register() {
    const user = {
      username,
      email,
      password
    };

    setloading(true);
    axios.post('http://127.0.0.1:8000/signup', user)
      .then(function (response) {
        setDetail(response.data.detail)
        setloading(false);
        setsuccess(true);
      })
      .catch(function (error) {
        setloading(false);
        seterror(true)
      });
  }

  return (
    <div>
      {loading && (<Loader />)}
      {error && (<Error message="Something went wrong !!" />)}
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5'>

          {success && (<Success message={detail} />)}
          <div className='bs'>
            <h2>REGISTER</h2>
            <input type="text" className="form-control" placeholder="username"
              value={username} onChange={(e) => { setusername(e.target.value) }} />
            <input type="email" className="form-control" placeholder="email"
              value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="password" className="form-control" placeholder="password"
              value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={register}>REGISTER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
