import React, { useContext } from 'react';
import { userContext } from '../../App';
import { Link } from "react-router-dom";
import './NavBar.css'

const Navbar = () => {
    const [user, setUser] = useContext(userContext)
    const { email, name } = user
    return (
        <div>
            <div className="container p-4">
                <div className="row">
                    <div className="d-flex justify-content-start col-sm-12 col-md-6 col-lg-4 nav-item "><h3 style={{ fontWeight: '800' }}><Link to="/home">Super Cars Shop</Link></h3></div>
                    <div className="nav-item d-flex justify-content-end col-sm-12 col-md-6 col-lg-8">
                        <Link to="/home"><p>Home</p></Link>
                        <Link to="/myOrders"><p>My Orders</p></Link>
                        <Link to="/admin"><p>Admin</p></Link>
                        <p>Deals</p>
                        {
                            email && name ? <p style={{ color: 'red', fontWeight: '700' }}>{name}</p>
                                : <Link to="/log-in"><button className="btn btn-warning">Log in</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;