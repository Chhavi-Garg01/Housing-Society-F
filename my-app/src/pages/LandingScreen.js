import React from 'react';
import { Link } from 'react-router-dom';

function LandingScreen() {
  return (
    <div className='row landing'>
      <div className='col-md-12 text-center'>
        <h2 style={{ color: 'black', fontSize: '70px', fontFamily: "monospace" }}>Welcome to the Society</h2>
        <Link to="/home"><button className='btn landingbtn'>Get Started</button></Link>
      </div>
    </div>
  )
}

export default LandingScreen;
