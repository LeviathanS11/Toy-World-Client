import React from 'react';
import SliderMarquee from '../Marquee/SliderMarquee';
import Banner from '../Banner/Banner';
import Background from '../../../Background/Background';


const Home = () => {
    return (
        <div>
            <Background></Background>
            <SliderMarquee></SliderMarquee>
            <Banner></Banner>
        </div>
    );
};

export default Home;