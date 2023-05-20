import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ToyTable from './ToyTable';

const AllToys = () => {
    const getToys = useLoaderData();

    return (
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
    );
};

export default AllToys;