import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const ToyUpdate = () => {
    const update=useLoaderData();
    const {price,quantity,detail,_id}=update;

    const handleUpdate=(event)=>{

        event.preventDefault();
        const form = event.target;
        const price=form.price.value;
        const quantity=form.quantity.value;
        const detail=form.detail.value;

        const all={price,quantity,detail}

        fetch(`https://assignment-11-server-leviathans11.vercel.app/toys/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(all)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Update Toy</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleUpdate} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' required placeholder="Price" defaultValue={price} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name='quantity' required placeholder="Quantity" defaultValue={quantity} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail</span>
                            </label>
                            <input type="text" name='detail' required placeholder="Description" defaultValue={detail} className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Update</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default ToyUpdate;