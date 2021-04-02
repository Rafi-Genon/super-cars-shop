import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SuperCarsCard from '../SuperCarsCard/SuperCarsCard';

const Home = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('https://afternoon-plateau-17206.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {
                    cars.length === 0 && <div className="d-flex" style={{ margin:'auto', marginTop:'10em'}}><Spinner animation="border" variant="primary mx-auto justify-content-center" /></div>
                }
                {
                    cars.map(car => <SuperCarsCard car={car} key={car._id}></SuperCarsCard>)
                }
            </div>
        </div>
    );
};

export default Home;