import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Resource({ resource }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='row bs'>
            <div className='col-md-4'>
                <img src={resource.image} className='smallimg' />
            </div>
            <div className='col-md-7'>
                <h1>{resource.resource_name}</h1>
                <b>
                    <p>Availability : {resource.availability}</p>
                    <p>Amount : {resource.amount}</p>
                </b>
                <div style={{ float: 'right' }}>
                    <Link to={`/book/${resource.id}`}>
                        <button className='btn'>Book Now</button>
                    </Link>
                    <button className='btn btn-primary' onClick={handleShow}>View Details</button>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{resource.resource_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={resource.image} className='smallimg' />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Resource;
