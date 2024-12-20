import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './style.css'; // Make sure to import your CSS file

const Preloader = () => {
    useEffect(() => {
        // Animation for the loading page
        gsap.fromTo(
            ".loading-page",
            { opacity: 1 },
            {
                opacity: 0,
                display: "none",
                duration: 1.5,
                delay: 3.5,
                onComplete: () => {
                    // Optionally handle what happens after the animation
                },
            }
        );

        // Animation for the logo
        gsap.fromTo(
            ".logo-name",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                delay: 0.5,
            }
        );
    }, []);

    return (
        <div className="container">
            {/* <p>Welcome Viewrs!</p> */}
            <div className="loading-page">
                <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M415.44 512h-95.11L212.12 357.46v91.1L125.69 512H28V29.82L68.47 0h108.05l123.74 176.13V63.45L386.69 0h97.69v461.5zM38.77 35.27V496l72-52.88V194l215.5 307.64h84.79l52.35-38.17h-78.27L69 13zm82.54 466.61l80-58.78v-101l-79.76-114.4v220.94L49 501.89h72.34zM80.63 10.77l310.6 442.57h82.37V10.77h-79.75v317.56L170.91 10.77zM311 191.65l72 102.81V15.93l-72 53v122.72z" />
                </svg>
                <div className="name-container">
                    <div className="logo-name">nullx</div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
