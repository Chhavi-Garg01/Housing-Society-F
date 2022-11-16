import React, { useEffect } from 'react';

import AddResource from './AddResource';
import AllBookings from './AllBookings';
import AllResources from './AllResources';
import AllUsers from './AllUsers';

function AdminScreen() {

    useEffect(async () => {
        if (!JSON.parse(localStorage.getItem("admin"))) {
            window.location.href = "/home";
        }
    }, [])

    return (
        <div className='ml-5 mt-3 mr-5 bs'>
            <h5>Admin Panel</h5>
            <ul class="nav nav-tabs">
                <li class="active"><a className="info" data-toggle="tab" href="#bookings">Bookings</a></li>
                <li><a className='info' data-toggle="tab" href="#resources">Resources</a></li>
                <li><a className='info' data-toggle="tab" href="#addresources">Add Resources</a></li>
                <li><a className='info' data-toggle="tab" href="#users">Users</a></li>
            </ul>
            <div class="tab-content mr-5">
                <div id="bookings" class="tab-pane fade in active">
                    <AllBookings />
                </div>
                <div id="resources" class="tab-pane fade">
                    <AllResources />
                </div>
                <div id="addresources" class="tab-pane fade">
                    <AddResource />
                </div>
                <div id="users" class="tab-pane fade">
                    <AllUsers />
                </div>
            </div>
        </div>
    )
}

export default AdminScreen;
