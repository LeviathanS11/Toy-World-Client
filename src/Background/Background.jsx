import React from 'react';
import './Background.css'
import img from '../assets/children-playing-with-toys.jpg'

const Background = () => {
    return (
        <div className='bannerBg relative'>
            <div className='overlay'>
                <div className='flex flex-col'>
                    <h1 className='font-medium text-2xl mr-5'>Best and Premium toys for your kids</h1>
                    <button className="btn btn-outline btn-primary w-28">Buy Now</button>
                </div>
                <div >
                    <img className='' style={{ width: '400px' }} src={img} alt="" />
                </div>
            </div>
            <div className='text-center absolute bottom-10 left-52'>
                    <input className='w-52 h-10 rounded p-2 ' type="text" placeholder='Search' />
                    <button className="btn btn-outline ml-1">Find Toys</button>
            </div>
        </div>
    );
};

export default Background;