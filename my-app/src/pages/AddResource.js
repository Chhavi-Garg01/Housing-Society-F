import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";

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

function AddResource() {

    const [resource_name, setname] = useState();
    const [amount, setamount] = useState();
    const [image, setimage] = useState();
    const [loading, setloading] = useState();

    const user = JSON.parse(localStorage.getItem("username"));

    useEffect(() => {
        if (!user) {
            window.location.href = "/login"
        }
    }, [])

    async function add_resource() {
        const res = {
            resource_name,
            amount,
            image
        };
        setloading(true);
        axios.post('http://127.0.0.1:8000/resources', res)
            .then(function (response) {
                setloading(false);
                Swal.fire("Congrats", "Resource Added Successfully", "success").then(result => {
                    window.location.href = "/home";
                })
                setname('');
                setamount('');
                setimage('');
            })
            .catch(function (error) {
                setloading(false);
                Swal.fire("Oops", "Something went wrong!", "error");
            });
    }

    return (
        <div className='row'>
            {loading && (<Loader />)}
            <div className='col-md-5 addresource'>
                <input type="text" className="form-control" placeholder='resource_name'
                    value={resource_name} onChange={(e) => { setname(e.target.value) }} />
                <input type="text" className="form-control" placeholder='amount'
                    value={amount} onChange={(e) => { setamount(e.target.value) }} />
                <input type="text" className="form-control" placeholder='image_url'
                    value={image} onChange={(e) => { setimage(e.target.value) }} />
                <div className='text-center'>
                    <button className='btn' onClick={add_resource}>ADD RESOURCE</button>
                </div>
            </div>
        </div>
    )
}

export default AddResource;
