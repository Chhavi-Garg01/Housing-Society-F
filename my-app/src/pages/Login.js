import React, { useState } from 'react';
import axios from 'axios';

import Loader from '../components/Loader';
import Error from '../components/Error';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setloading] = useState();
  const [error, seterror] = useState();
  const [detail, setDetail] = useState('');

  async function login() {
    const user = {
      email,
      password
    }

    setloading(true);
    axios.post('https://housingsocietybackend.herokuapp.com/login', user)
      .then(function (response) {
        setloading(false);
        localStorage.setItem("auth", JSON.stringify(response.data.access_token));
        localStorage.setItem("username", JSON.stringify(response.data.username));
        localStorage.setItem("email",JSON.stringify(response.data.email));
        localStorage.setItem("admin",JSON.stringify(response.data.admin));
        window.location.href = "/home";
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
          <div className='bs'>
            <h2>LOGIN</h2>
            <input type="email" className="form-control" placeholder="email"
              value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type="password" className="form-control" placeholder="password"
              value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <button className='btn btn-primary mt-3' onClick={login}>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
