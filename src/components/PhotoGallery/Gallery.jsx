import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Assuming your styles are in style.css

const slides = [
    {
        img: '/Gallery/1.webp',
        // title: 'Slider 01',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/2.webp',
        // title: 'Slider 02',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/3.webp',
        // title: 'Slider 03',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/4.webp',
        // title: 'Slider 04',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/5.webp',
        // title: 'Slider 05',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/6.webp',
        // title: 'Slider 05',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
    {
        img: '/Gallery/7.webp',
        // title: 'Slider 05',
        // description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque?',
    },
];

const Gallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const intervalRef = useRef(null);

    const showSlider = (index) => {
        setActiveIndex(index);
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        intervalRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);

    useEffect(() => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(nextSlide, 5000);
        return () => clearInterval(intervalRef.current);
    }, [activeIndex]);

    return (
        <div>
            <header>
                {/* <div className="logo">Lundev</div>
                <ul className="menu">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Info</li>
                </ul> */}
                {/* <div className="search">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div> */}
                <h1 className='uppercase text-5xl font-extrabold text-center pt-16 w-full'>Photo Gallery</h1>
            </header>

            <div className="slider">
                <div className="list">
                    {slides.map((slide, index) => (
                        <div key={index} className={`item ${activeIndex === index ? 'active' : ''}`}>
                            <img src={slide.img} alt={slide.title} />
                            <div className="content">
                                <p>design</p>
                                <h2>{slide.title}</h2>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="arrows">
                    <button className='content' onClick={prevSlide}>{'<'}</button>
                    <button className='content' onClick={nextSlide}>{'>'}</button>
                </div> */}
                <div className="thumbnail">
                    {slides.map((slide, index) => (
                        <div key={index} className={`item ${activeIndex === index ? 'active' : ''}`} onClick={() => showSlider(index)}>
                            <img src={slide.img} alt={slide.title} />
                            <div className="content">
                                Photo Gallery
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
