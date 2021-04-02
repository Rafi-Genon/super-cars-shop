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

    console.log(orderedCars);
    let total = 0;
    orderedCars.map(car => {
        const carPrice = parseInt(car.order.price)
        total = total + carPrice
        return (total)
    })

    const renderOrders = (orderedCars, index) => {
        const { orderTime } = orderedCars
        const { name, price } = orderedCars.order
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{orderTime}</td>
                <td>{name}</td>
                <td>1</td>
                <td>$ {price}</td>
            </tr>
        )
    }

    return (
        <div className="container">
            {
                orderedCars.length === 0 ? <div className="d-flex" style={{ margin: 'auto', marginTop: '10em' }}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                    : <div className="shadow my-5" style={{ padding: '2%', borderRadius: '1em' }}>
                        <Table hover >
                            <thead className="text-center">
                                <tr className="table-primary">
                                    <td style={{ width: '50px' }}>Serial</td>
                                    <td>Order time</td>
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
                                    <td colSpan="4" >Total Price</td>
                                    <td>$ {total}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
            }
        </div >
    );
};

export default MyOrders;