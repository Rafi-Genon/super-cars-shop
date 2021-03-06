import React, { useContext } from 'react';
import { userContext } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './SuperCarsCard.css'

const SuperCarsCard = (props) => {
    const [userOrder, setUserOrder] = useContext(userContext)

    const { name, price, image, mileage } = props.car

    const buyNow = (car) => {
        const newUserInfo = { ...userOrder }
        newUserInfo.order = car
        setUserOrder(newUserInfo)
    }
    return (
        <div className="col my-3">
            <div className="card h-100 card-radius shadow">
                <div className="do-padding"><img src={image} className="card-img-top" alt="dda" /></div>
                <div className="card-body">
                    <h4 className="card-title fw-bold dark-blue-font mb-3">{name}</h4>
                    <p className="card-title fw-bold dark-blue-font">{mileage} kmpl</p>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <h2 className="orange-highlight fw-bold">${price}</h2>
                    <Link to="/addToCart">
                        <div onClick={() => buyNow(props.car)}>
                            <i className="fas fa-shopping-cart"></i>
                            <span className="do-margin-on-button buy-btn btn text-white"><FontAwesomeIcon icon={faShoppingCart} /> BUY NOW</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SuperCarsCard;