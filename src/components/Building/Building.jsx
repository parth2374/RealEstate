import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./style.css"; // Make sure to import your CSS

const Building = () => {
  useEffect(() => {
    loadSVG();
  }, []);

  const loadSVG = () => {
    fetch("/city.svg")
      .then((response) => response.text())
      .then((svg) => {
        document.getElementById("bg_city").innerHTML = svg;
        const svgElement = document.querySelector("#bg_city svg");
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
      },
    });

    runAnimation
      .add([
        gsap.to("#bg_city svg", { duration: 2, scale: 1.5 }),
        gsap.to("#full_city", { duration: 2, opacity: 0 }),
      ])
      .add([
        gsap.to("#building_top", { duration: 2, y: -200, opacity: 0 }),
        gsap.to("#wall_side", { duration: 2, x: -200, opacity: 0 }),
        gsap.to("#wall_front", { duration: 2, x: 200, y: 200, opacity: 0 }),
      ])
      .add([
        gsap.to("#interior_wall_side", { duration: 2, x: -200, opacity: 0 }),
        gsap.to("#interior_wall_top", { duration: 2, y: -200, opacity: 0 }),
        gsap.to("#interior_wall_side_2", { duration: 2, opacity: 0 }),
        gsap.to("#interior_wall_front", { duration: 2, opacity: 0 }),
      ]);
  };

  return (
    <div>
      <header>
        {/* <div className="logo">
                    <img src="/img/logoweb.png" alt="" />
                </div> */}
        {/* <nav>
                    <ul>
                        <li className="active">Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </nav> */}
      </header>
      <div className="banner">
        <div id="bg_city"></div>
        <div className="content">
          <div className="item">
            <div>
              <p>MR. LOKESH BANSAL</p>
              <p>- VASTU EXPERT</p>
            </div>
            <div>
              <p>PROPERTY DEALER</p>
              <p>.........................</p>
            </div>
          </div>
          <div className="item title">
            {/* <p>Hong Kong</p> */}
            <p>real estate</p>
          </div>
        </div>
      </div>
      <main>
        <div className="friend">
          <div className="me">
            <h1>GET IT SOLD</h1>
          </div>
          <div>
            <div className="flex flex-col md:flex-row lg:flex-row gap-10">
              <div>
                <img
                  src="/GetItSold/2.webp"
                  className="h-[300px] w-[1500px] rounded-xl relative z-50"
                />
                <img
                  src="/GetItSold/DotsWhite.png"
                  className="h-[25%] w-[25%] relative -z-10 mt-[-3vw]"
                />
              </div>
              <div className="font-white flex-col items-center justify-center gap-10">
                <p className="text-center text-2xl font-bold pt-10 md:pt-4 lg:pt-14">
                  Top Residential Sales Last 5 Years
                </p>
                <p className="text-center pt-5">
                  We helped several clients in 2021! Our team works hard
                  everyday to grow and learn, so that we may continue to excel
                  in our market. Our clients deserve our best, & we want to make
                  sure our best is better every year.
                </p>
                <div className="h-10 w-full border border-[#95C11E] mt-6 rounded-3xl hover:bg-[#95C11E] transition-all duration-300">
                  <p className="text-center pt-2 text-black hover:font-white transition-all duration-300">
                    Residential Property
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-10">
              <div className="font-white flex-col items-center justify-center gap-10">
                <p className="text-center text-2xl font-bold pt-14">
                  Don't Just List it...
                </p>
                <p className="text-center pt-5">
                  Get it SOLD! We exhaust every avenue to ensure our listings
                  are at the fingertips of every possible buyer, getting you top
                  penny for your home.
                </p>
                <div className="h-10 w-full border border-[#95C11E] mt-6 rounded-3xl hover:bg-[#95C11E] transition-all duration-300">
                  <p className="text-center pt-2 text-black hover:font-white transition-all duration-300">
                    Selling Your Property
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/GetItSold/1.webp"
                  className="h-[300px] w-[1500px] rounded-xl relative z-50"
                />
                <img
                  src="/GetItSold/DotsWhite.png"
                  className="h-[25%] w-[25%] relative -z-10 mt-[-3vw] ms-0 md:ms-[38vw] lg:ms-[35vw]"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row gap-10 mt-10">
              <div>
                <img
                  src="/GetItSold/SoldImage3.webp"
                  className="h-[300px] w-[1500px] rounded-xl relative z-50"
                />
                <img
                  src="/GetItSold/DotsWhite.png"
                  className="h-[25%] w-[25%] relative -z-10 mt-[-3vw]"
                />
              </div>
              <div className="font-white flex-col items-center justify-center gap-10">
                <p className="text-center text-2xl font-bold pt-14">
                  Guide to Buyers
                </p>
                <p className="text-center pt-5">
                  Nobody knows the market like we do. Enjoy having a pro at your
                  service. Market analysis, upgrades lists, contractors on speed
                  dial, & more!
                </p>
                <div className="h-10 w-full border border-[#95C11E] mt-6 rounded-3xl hover:bg-[#95C11E] transition-all duration-300">
                  <p className="text-center pt-2 text-black hover:font-white transition-all duration-300">
                    Knowing The Market
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Building;
