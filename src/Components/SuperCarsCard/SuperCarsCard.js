import React from 'react';
import './SuperCarsCard.css'
const SuperCarsCard = (props) => {
    const { name, price, image } = props.car
    return (
        <div className="col my-3">
            <div className="card h-100 card-radius shadow">
                <div className="do-padding"><img src={image} className="card-img-top" alt="dda" /></div>
                <div className="card-body">
                    <h4 className="card-title fw-bold dark-blue-font mb-3">{name}</h4>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-3">
                    <h2 className="orange-highlight fw-bold">${price}</h2>
                    <a href="https://www.facebook.com/rafi.genon/" className="buy-btn btn text-white"><i className="fas fa-shopping-cart"></i> <span
                        className="do-margin-on-button">BUY NOW</span></a>
                </div>
            </div>
        </div>
    );
};

export default SuperCarsCard;