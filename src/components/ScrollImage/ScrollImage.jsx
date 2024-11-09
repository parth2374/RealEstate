// import React from 'react'
// import './Style.css'

// const ScrollImage = () => {
// 	return (
// 		<div className='h-[65vh]'>
// 			<div className='containerHello'>
// 				<h1 className='text-5xl font-extrabold'>WE SELL PROPERTIES</h1>
// 				<ul>
// 					<li>In Any Condition</li>
// 					<li>In Any Market</li>
// 					<li>On Your Condition</li>
// 				</ul>
// 			</div>
// 		</div>
// 	)
// }

// export default ScrollImage

















import React, { useState, useEffect } from "react";
import "./Style.css";

const ScrollImage = () => {
  // const items = ["In Any Condition", "In Any Market", "On Your Condition"];
  const items = ["In Any Condition", "In Any Market", "On Your Timeline"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="h-[65vh]">
      <div className="containerHello">
        <h1 className="text-5xl font-extrabold ps-12 md:ps-0 lg:ps-0">WE DEAL IN PROPERTIES</h1>
        <div className="sliderFirst">
          <div className="slidesFirst" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {items.map((item, index) => (
              <div className="slideFirst font-bold" key={index}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollImage;
