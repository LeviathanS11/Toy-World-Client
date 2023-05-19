import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/cover.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
            <div className="navbar-center ">
                <Link className='ml-2 hover:text-orange-400'>Home</Link>
                <Link className='ml-2 hover:text-orange-400'>Blog</Link>
                <Link className='ml-2 hover:text-orange-400'>All Toys</Link>
                <Link className='ml-2 hover:text-orange-400'>My Toys</Link>
                <Link className='ml-2 hover:text-orange-400'>Add Toys</Link>
            </div>
            <div className="navbar-end">
                <button>Login</button>
                <button>Log-Out</button>
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;