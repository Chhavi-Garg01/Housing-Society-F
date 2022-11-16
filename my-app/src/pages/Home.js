import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Resource from '../components/Resource';
import Loader from '../components/Loader';
import Error from '../components/Error';

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

function Home() {

    const [resources, setresources] = useState([]);
    const [loading, setloading] = useState();
    const [detail, setDetail] = useState('');

    useEffect(async () => {
        try {
            setloading(true);
            const data = (await axios.get('https://housingsocietybackend.herokuapp.com/resources')).data;
            setresources(data);
            setloading(false);
        }
        catch (error) {
            setDetail(error.response.data.detail);
            setloading(false);
        }
    }, [])

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                {loading ? (<Loader />
                ) : resources.length > 1 ? (
                    resources.map((resource,i) => {
                        return <div key={i} className='col-md-9 mt-3'>
                            <Resource resource={resource} />
                        </div>
                    })
                ) : (
                    <Error message={detail} />
                )}
            </div>
        </div>
    )
}

export default Home;
