import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const MyToy = () => {
    const {user}=useContext(AuthContext)
    const url =`http://localhost:5000/toys?email=${user.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            <Header></Header>
            <h1>This is Mytoy</h1>
            <Footer></Footer>
        </div>
    );
};

export default MyToy;