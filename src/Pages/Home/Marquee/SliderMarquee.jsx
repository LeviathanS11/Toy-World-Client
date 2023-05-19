import React from 'react';
import Marquee from 'react-fast-marquee';
import logo from '../../../assets/cover.png'

const SliderMarquee = () => {
    return (
        <div className='my-3'>
            <Marquee speed={70} gradient={true} gradientColor={[235, 215, 205]} className='text-red-200' autoFill={true}>
                <img style={{ height: '50px' }} src={logo} alt="" />
                <p>Our Shop is closed on Sunday.</p>
            </Marquee>
        </div>
    );
};

export default SliderMarquee;