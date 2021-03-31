import React, { useEffect, useState } from 'react';
import SuperCarsCard from '../SuperCarsCard/SuperCarsCard';

const Home = () => {
    const [cars, setCars] = useState([])
    useEffect(() => {
        fetch('http://localhost:3300/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                {
                    cars.map(car => <SuperCarsCard car={car} go={'idan'} key={car._id}></SuperCarsCard>)
                }
            </div>
        </div>
    );
};

export default Home;