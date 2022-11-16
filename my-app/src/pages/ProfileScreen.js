import React, { useEffect } from 'react';

import MyBookings from './MyBookings';

function ProfileScreen() {
    const user = JSON.parse(localStorage.getItem("username"));
    const email = JSON.parse(localStorage.getItem("email"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    useEffect(() => {
        if (!user) {
            window.location.href = "/login"
        }
    }, [])

    return (
        <div className='ml-5 mt-3'>
            <ul class="nav nav-tabs ">
                <li class="active"><a className="info" data-toggle="tab" href="#profile">Profile</a></li>
                <li><a className='info' data-toggle="tab" href="#book">Bookings</a></li>
            </ul>
            <div class="tab-content mr-5">
                <div id="profile" class="tab-pane fade in active bs">
                    <h3 className='ml-5 mt-2'>My Profile</h3>
                    <br />
                    <h1 className='ml-5 '>Name: {user}</h1>
                    <h1 className='ml-5'>Email: {email}</h1>
                    <h1 className='ml-5'>Admin: {admin ? "Yes" : "No"}</h1>
                </div>
                <div id="book" class="tab-pane fade">
                    <MyBookings />
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen;
