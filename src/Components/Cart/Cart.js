import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Cart = () => {
    const [userOrderDetails, setUserOrderDetails] = useContext(userContext)

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
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const { name, price } = userOrderDetails.order

    return (
        <div className="container">
            <h1>welcome to order page</h1>
            <div className="shadow my-5" style={{ padding: '2%', borderRadius: '1em' }}>
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
                                <td>$ {price}</td>
                            </tr>
                        }
                        <tr className="bg-dark text-white">
                            <td colSpan="2">Total Price</td>
                            <td>$ {price}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="d-flex justify-content-end mr-5 mt-5"><Link to="/checkOut"> <button className="btn btn-success p-2 px-3" onClick={placeOrder}><FontAwesomeIcon icon={faCheckCircle} /> Checkout</button></Link></div>
        </div>
    );
};

export default Cart;