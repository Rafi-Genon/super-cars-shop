import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
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

    const { name, price } = userOrderDetails.order

    return (
        <div className="container">
            <h1>welcome to order page</h1>
            <Table hover >
                <thead className="text-center">
                    <tr className="table-primary">
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                            <tr>
                                {/* <td>{index + 1}</td> */}
                                <td>{name}</td>
                                <td>1</td>
                                <td>{price}</td>
                            </tr>
                    }
                    <tr className="bg-dark text-white">
                        <td colSpan="2">Total Price</td>
                        <td>{price}</td>
                    </tr>
                </tbody>
            </Table>
            <div className="d-flex justify-content-end mr-5 mt-5"><Link to="/checkOut"> <button className="btn btn-success" onClick={placeOrder}>checkout plz</button></Link></div>
        </div>
    );
};

export default Cart;