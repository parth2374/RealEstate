import React from 'react';
import './Style.css';

const Services = () => {
    return (
        <div id="page4">
            <h1 className='text-center'>OUR SERVICES</h1>
            <div className="elem -mt-44 md:-mt-16 lg:-mt-0">
                <h2 className='uppercase text-center'>We utilize Vastu to significantly increase the value of your property or land</h2>
                <img 
                    src="/Services/1.webp" 
                    alt="Toptracer Range" 
                />
            </div>
            <div className="elem -mt-0 md:-mt-16 lg:-mt-0">
                <h2 className='uppercase text-center'>Our experienced team provides personalized insights to maximize your investment potential</h2>
                <img 
                    src="/Services/2.jpg" 
                    alt="Golf Lessons" 
                />
            </div>
            <div className="elem -mt-0 md:-mt-16 lg:-mt-0">
                <h2 className='uppercase text-center'>We charge a competitive 15% commission on the profits generated from our services.</h2>
                <img 
                    src="/Services/3.webp" 
                    alt="Adventure Golf" 
                />
            </div>
        </div>
    );
};

export default Services;