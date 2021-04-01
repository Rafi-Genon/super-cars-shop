import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Cart = () => {
    const [userOrderDetails, setUserOrderDetails] = useContext(userContext)

    console.log(userOrderDetails);

    const placeOrder = () => {
        const url = 'https://afternoon-plateau-17206.herokuapp.com/placeOrder'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userOrderDetails),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:mamam from server', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h1>welcome to order page</h1>
            <Link to="/checkOut"> <button onClick={placeOrder}>checkout plz</button></Link>
        </div>
    );
};

export default Cart;