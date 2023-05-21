import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const ToyDetails = () => {
    const singleData = useLoaderData();
    const { name, toyName, category, price, quantity, email, rating, detail,image } = singleData;
    return (
        <div>
            <Header></Header>
            <div className="card w-96 glass mx-auto mt-10">
            <figure><img src={image} /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>Name:{name}</p>
                <p>Email:{email}</p>
                <p>Price:{price}</p>
                <p>Rating:{rating}</p>
                <p>Quantity:{quantity}</p>
                <p>Details:{detail}</p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ToyDetails;