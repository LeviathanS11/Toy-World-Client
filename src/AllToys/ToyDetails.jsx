import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const ToyDetails = () => {
    const singleData = useLoaderData();
    const { name, toyName, category, price, quantity, email, rating, detail } = singleData;
    return (
        <div>
            <Header></Header>
            <div className="card w-96 glass mx-auto mt-10">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{toyName}</h2>
                <p>{name}</p>
                <p>{email}</p>
                <p>{price}</p>
                <p>{rating}</p>
                <p>{quantity}</p>
                <p>{detail}</p>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ToyDetails;