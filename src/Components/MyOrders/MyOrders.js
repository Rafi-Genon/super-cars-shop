import React, { useContext, useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { userContext } from '../../App';

const MyOrders = () => {
    const [orderedCars, setOrderedCars] = useState([])
    const [loggedInUser, setloggedInUser] = useContext(userContext)
    useEffect(() => {
        fetch(`https://afternoon-plateau-17206.herokuapp.com/showOrders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderedCars(data)
            }
            )
    }, [loggedInUser.email])

    // let total = 0;
    // for (let i = 0; i < orderedCars.length; i++) {
    //     const carPrice = parseInt(orderedCars[i].order.price)
    //     total = total + carPrice
    // }

    let total = 0;
    orderedCars.map(car => {
        const carPrice = parseInt(car.order.price)
        total = total + carPrice
        return (total)
    })
    
    const renderOrders = (orderedCars, index) => {
        const { name, price } = orderedCars.order
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>1</td>
                <td>{price}</td>
            </tr>
        )
    }

    return (
        <div className="container">
            {
                orderedCars.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                    : <Table hover >
                        <thead className="text-center">
                            <tr className="table-primary">
                                <td style={{ width: '50px' }}>Serial</td>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                orderedCars.map(renderOrders)
                            }
                            <tr className="bg-dark text-white">
                                <td colSpan="3" >Total Price</td>
                                <td>{total}</td>
                            </tr>
                        </tbody>
                    </Table>
            }
        </div >
    );
};

export default MyOrders;