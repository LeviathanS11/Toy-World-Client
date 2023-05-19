import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/cover.png';

const Header = () => {
    return (
        <div className="navbar bg-zinc-300">
            <div className="navbar-start">
                <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
            <div className="navbar-center ">
                <Link to="/" className='ml-2 hover:text-orange-400'>Home</Link>
                <Link to="/blog" className='ml-2 hover:text-orange-400'>Blog</Link>
                <Link className='ml-2 hover:text-orange-400'>All Toys</Link>
                <Link className='ml-2 hover:text-orange-400'>My Toys</Link>
                <Link className='ml-2 hover:text-orange-400'>Add Toys</Link>
            </div>
            <div className="navbar-end">
            <Link><button className="btn btn-xs">Login</button></Link>
            <Link><button className="btn btn-xs">Logout</button></Link>
            <img style={{ height: '50px' }} src={logo} alt="" />
            </div>
        </div>
    );
};

export default Header;