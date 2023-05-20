import React from 'react';
import Header from '../Pages/Shared/Header/Header';
import { Form } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const AddToys = () => {

    const handleAddToys=event=>{
        event.preventDefault();
        const form = event.target;
        const toyName=form.ToyName.value;
        const name=form.name.value;
        const category=form.category.value;
        const email=form.email.value;
        const price=form.price.value;
        const rating=form.rating.value;
        const quantity=form.quantity.value;
        const detail=form.detail.value;
        const image=form.image.value

        const all={toyName,name,category,email,price,rating,quantity,detail,image}

        console.log(all)

        fetch('http://localhost:5000/toys',{
            method:'POST',
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
                    <h1 className="text-5xl font-bold">Add Toy</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleAddToys} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Toy Name</span>
                            </label>
                            <input type="text" name='ToyName' required placeholder="Name of your Toy" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name='name' required placeholder=" Your Name " className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-category</span>
                            </label>
                            <input type="text" name='category' required placeholder=" Sub-category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" name='price' required placeholder="Price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="text" name='rating' required placeholder=" Rating" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="text" name='quantity' required placeholder="Quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail</span>
                            </label>
                            <input type="text" name='detail' required placeholder="Description" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='image' required placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Add</button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default AddToys;