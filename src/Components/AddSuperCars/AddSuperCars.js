import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddSuperCar = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const carInfo = {
            name: data.carName,
            price: data.carPrice,
            image: imageURL
        }
        console.log(carInfo);
        const url = 'http://localhost:3300/addCar'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carInfo),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:mamam from server', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    };

    const handleImageUpload = (event) => {
        const imageData = new FormData()
        imageData.set('key', '9a1324da5eb95401b8d1fc7c0671eea1')
        imageData.append('image', event.target.files[0])

        const axios = require('axios');
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
    }
    return (
        <div>
            <h1>i am adding</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <input name="carName" ref={register} required placeholder="Car name" />
                <br />
                <input name="carPrice" ref={register({ required: true })} required placeholder="Car price" />
                <br />
                <input type="file" name="carImage" id="" ref={register} onChange={handleImageUpload} required placeholder="Car Image" />
                <br />
                {/* {errors.exampleRequired && <span>This field is required</span>} */}

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddSuperCar;