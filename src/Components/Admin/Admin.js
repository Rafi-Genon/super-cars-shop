import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faDatabase } from '@fortawesome/free-solid-svg-icons'

const Admin = () => {
    return (
        <div className="container">
            <Link to="/addCar"><p className="btn btn-primary px-3 mr-2"><FontAwesomeIcon icon={faPlus} /> Add Car</p></Link>
            <Link to="/manageCars"><p className="btn btn-primary px-3 ml-2"><FontAwesomeIcon icon={faDatabase} /> Manage Cars</p></Link>
        </div>
    );
};

export default Admin;