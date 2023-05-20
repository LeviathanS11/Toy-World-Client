import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const AllToys = () => {
    const getToys = useLoaderData();

    return (
        <div>
            <Header></Header>
            <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getToys.map(toy => <ToyTable key={toy._id} toy={toy}></ToyTable>)
                    }
                </tbody>
            </table>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AllToys;