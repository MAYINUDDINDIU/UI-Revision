import { Carousel } from 'flowbite-react';
import React from 'react';
import slider1 from '../Assets/Slider/slider1.jpg';
import slider2 from '../Assets/Slider/slider2.jpg';
const Slider = () => {
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel>
                    <img
                        src={slider1}
                        alt="..."
                    />
                    <img
                        src={slider2}
                        alt="..."
                    />
                    <img
                        src={slider1}
                        alt="..."
                    />
                    <img
                        src={slider2}
                        alt="..."
                    />

                </Carousel>
            </div>
        </div>
    );
};

export default Slider;