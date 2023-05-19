import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp=event=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset();
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })
    }
    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <Form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' required placeholder="Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='image' required placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                            <p>Already have an account.<Link className='text-red-600' to='/login'>Login</Link></p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Register;