import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import ToyTable from '../AllToys/ToyTable';
import MyToyTable from './MyToyTable';

const MyToy = () => {
    const {user}=useContext(AuthContext)
    const [myToy,setMyToy]=useState([])
    const url =`https://assignment-11-server-leviathans11.vercel.app/mytoys?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            setMyToy(data)
        })
    },[])
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myToy.map(toy => <MyToyTable key={toy._id} toy={toy}></MyToyTable>)
                    }
                </tbody>
            </table>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default MyToy;