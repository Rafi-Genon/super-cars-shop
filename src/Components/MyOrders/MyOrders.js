import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';

const MyOrders = () => {
    const [orderedCars, setOrderedCars] = useState([])
    const [loggedInUser, setloggedInUser] = useContext(userContext)

    useEffect(() => {
        fetch(`https://afternoon-plateau-17206.herokuapp.com/showOrders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrderedCars(data))
    }, [loggedInUser.email])
    console.log(orderedCars);
    return (
        <div>
            <h1>this sissisi my orserser</h1>
        </div>
    );
};

export default MyOrders;