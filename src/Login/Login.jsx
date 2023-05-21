import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from "firebase/auth";
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';



const Login = () => {
    const location=useLocation();
    const navigate=useNavigate();
    const { signIn, handleGoogle } = useContext(AuthContext)
    const GoogleProvider = new GoogleAuthProvider();

    const from=location.state?.form?.pathname || '/';

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                console.log(loggedUser)
                form.reset();
                navigate(from,{replace:true})
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        handleGoogle(GoogleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                navigate(from,{replace:true})
            })
            .catch(error => {
                console.log(error.message)
            })
    }


    return (
        <div>
            <Header></Header>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form className="card-body" onSubmit={handleSignIn}>
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
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                                <p>New to this Website!!!<Link className='text-red-600' to='/register'>Register Now.</Link></p>
                            </div>
                        </Form>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">login with google</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;