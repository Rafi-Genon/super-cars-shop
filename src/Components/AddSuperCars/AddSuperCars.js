import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import Admin from '../Admin/Admin';

const AddSuperCar = () => {
    const { register, handleSubmit } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [successUploap, setSuccessUploap] = useState(false)
    const [imageUpload, setImageUpload] = useState(false)

    const onSubmit = data => {
        const carInfo = {
            name: data.carName,
            price: data.carPrice,
            image: imageURL,
            mileage: data.carMileage
        }
        const url = 'https://afternoon-plateau-17206.herokuapp.com/addCar'

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carInfo),
        })
            .then(response => {
                response.json()
                setSuccessUploap(true)
            })
            .then(data => {
                console.log('Success', data);
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
                setImageUpload(true)
            })
    }
    return (
        <div className="container">
            <Admin></Admin>
            {
                successUploap && <h2 style={{borderRadius:'2em'}} className="bg-success text-center text-white p-2">Successfully Uploaded to server Back Home</h2>
            }
            <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow p-5 my-5" style={{ borderRadius: '1em' }}>
                    <div className="form-row">
                        <div className="col">
                            <label htmlFor="name">Car Model</label>
                            <input className="form-control" id="name" name="carName" ref={register} required />
                        </div>
                        <div className="col">
                            <label htmlFor="price">Car Price</label>
                            <input className="form-control" id="price" name="carPrice" ref={register} required />
                        </div>
                    </div>

                    <div className="form-row mt-4 d-flex align-items-center ">
                        <div className="col">
                            <label htmlFor="mileage">Car Mileage per liter (kmpl)</label>
                            <input className="form-control" id="mileage" name="carMileage" ref={register} required />
                        </div>
                        <div className="col pt-4 pl-5">
                            <label className="btn btn-primary" htmlFor="image"><FontAwesomeIcon icon={faUpload} /> Upload Car Image</label>
                            <input style={{ display: 'none' }} className="form-control" type="file" name="carImage" id="image" ref={register} onChange={handleImageUpload} required />
                            {
                                imageUpload && <p style={{borderRadius:'2em', fontWeight:'600'}} className="bg-success text-center text-white p-2">Image uploaded to server successfully</p>
                            }
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <input className="btn btn-success mb-5 px-4 py-2" type="submit" value="Save" />
                </div>
            </form>

        </div>
    );
};

export default AddSuperCar;