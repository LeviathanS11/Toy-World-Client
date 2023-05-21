import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

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
            <h1>My Added Toys:{myToy.length}</h1>
            <Footer></Footer>
        </div>
    );
};

export default MyToy;