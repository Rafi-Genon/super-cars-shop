import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Admin from '../Admin/Admin';

const ManageCars = () => {
    const [cars, setCars] = useState([])
    const fetchCarsData = () => {
        fetch('https://afternoon-plateau-17206.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }
    useEffect(() => {
        fetchCarsData()
    }, [])

    const renderCar = (cars, index, event) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{cars.name}</td>
                <td>{cars.price}</td>
                <td><button className="btn btn-danger" onClick={() => removeFromServer(cars._id)}>remove</button></td>
            </tr>

        )
    }
    const removeFromServer = (id) => {
        console.log('clicked fforrr remove', id);
        fetch(`https://afternoon-plateau-17206.herokuapp.com/remove/${id}`, {
            method: 'DELETE'
        })
            .then(res => fetchCarsData())

    }
    return (
        <div className="container">
            <Admin></Admin>
            <h1>this is magandig</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <td>Serial</td>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map(renderCar)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageCars;