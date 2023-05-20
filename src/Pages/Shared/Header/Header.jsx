import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/cover.png';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    return (
        <div className="navbar bg-zinc-300 ">
            <div className="navbar-start">
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
            <div className="navbar-center ">
                <Link to="/" className='ml-2 hover:text-orange-400'>Home</Link>
                <Link to="/blog" className='ml-2 hover:text-orange-400'>Blog</Link>
                <Link className='ml-2 hover:text-orange-400'>All Toys</Link>
                
                {
                    user && <div>
                    <Link className='ml-2 hover:text-orange-400'>My Toys</Link>
                    <Link className='ml-2 hover:text-orange-400'>Add Toys</Link>
                    </div>
                }
            </div>
            <div className="navbar-end">
                {user ? <button onClick={logOut} className="btn btn-xs">Logout</button> :
                    <Link to="/login"><button className="btn btn-xs">Login</button></Link>}
            </div>
            {
                user ? <img title={user.displayName} style={{ width: '40px' }} src={user.photoURL} alt="" /> : <Link><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle></Link>
            }
        </div>
    );
};

export default Header;