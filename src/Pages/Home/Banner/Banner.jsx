import React from 'react';
import img1 from '../../../assets/33756668_8065872.jpg'
import img2 from '../../../assets/asian-cute-boy-playing-doctor-use-stethoscope-checking-large-teddy-bear-sitting-floor.jpg'
import img3 from '../../../assets/baby-toys-wooden-plane-flat-lay.jpg'
import img4 from '../../../assets/little-girl-playing-with-toys-living-room.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-7/12 mx-auto rounded" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={img2} className="w-7/12 mx-auto rounded" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={img3} className="w-7/12 mx-auto rounded" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={img4} className="w-7/12 mx-auto rounded" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;