import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css'; // Make sure to import your CSS

const Building = () => {
    useEffect(() => {
        loadSVG();
    }, []);

    const loadSVG = () => {
			fetch("/city.svg")
					.then((response) => response.text())
					.then((svg) => {
							document.getElementById('bg_city').innerHTML = svg;
							const svgElement = document.querySelector('#bg_city svg');
							svgElement.setAttribute("preserveAspectRatio", "xMidYMid slice");
							console.log("SVG loaded:", svgElement); // Debug
							setAnimationScroll();
					});
	};

    const setAnimationScroll = () => {
        gsap.registerPlugin(ScrollTrigger);
        const runAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#bg_city",
                start: "top top",
                end: "+=1000",
                scrub: true,
                pin: true,
            }
        });

        runAnimation.add([
            gsap.to("#bg_city svg", { duration: 2, scale: 1.5 }),
            gsap.to("#full_city", { duration: 2, opacity: 0 })
        ])
        .add([
            gsap.to("#building_top", { duration: 2, y: -200, opacity: 0 }),
            gsap.to("#wall_side", { duration: 2, x: -200, opacity: 0 }),
            gsap.to("#wall_front", { duration: 2, x: 200, y: 200, opacity: 0 })
        ])
        .add([
            gsap.to("#interior_wall_side", { duration: 2, x: -200, opacity: 0 }),
            gsap.to("#interior_wall_top", { duration: 2, y: -200, opacity: 0 }),
            gsap.to("#interior_wall_side_2", { duration: 2, opacity: 0 }),
            gsap.to("#interior_wall_front", { duration: 2, opacity: 0 })
        ]);
    };

    return (
        <div>
            <header>
                <div className="logo">
                    <img src="/img/logoweb.png" alt="" />
                </div>
                <nav>
                    <ul>
                        <li className="active">Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>
            <div className="banner">
                <div id="bg_city"></div>
                <div className="content">
                    <div className="item">
                        <div>
                            <p>LUNDEV CHANNEL</p>
                            <p>DEVELOPER & DESIGNER</p>
                        </div>
                        <div>
                            <p>CONTENT CREATER</p>
                            <p>ALL LANGUAGE</p>
                        </div>
                    </div>
                    <div className="item title">
                        <p>Hong Kong</p>
                        <p>real estate</p>
                    </div>
                </div>
            </div>
            <main>
                <div className="friend">
                    <div className="me">
                        <h1>Lun Dev</h1>
                        <h2>Developer & Designer</h2>
                        <p>Please like and subscribe to the channel to watch many interesting videos <br /> about programming and web design</p>
                    </div>
                    <ul>
                        {Array.from({ length: 10 }, (_, index) => (
                            <li key={index}><img src={`/img/${index + 1}.png`} alt="" /></li>
                        ))}
                    </ul>
                </div>
                <div className="lorem">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable...
                </div>
            </main>
        </div>
    );
};

export default Building;
