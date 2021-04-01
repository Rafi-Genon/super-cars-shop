import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <ul>
                <Link to="/addCar"><li>Add Car</li></Link>
                <Link to="/manageCars"><li>Manage Cars</li></Link>
            </ul>
        </div>
    );
};

export default Admin;