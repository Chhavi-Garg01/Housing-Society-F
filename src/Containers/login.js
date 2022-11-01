import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBBtn
}
from 'mdb-react-ui-kit';
import "../assets/Styles/login.css";

function loginForm() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <p class="login">LOGIN HERE</p>
      <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <MDBBtn className="mb-4">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
      </div>

    </MDBContainer>
  );
}

export default loginForm;