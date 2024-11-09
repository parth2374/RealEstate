import React from "react";
import "./Style.css";

const Property = () => {
  return (
    <div>
      <h1 className="text-4xl text-center pt-10 font-extrabold uppercase ">
        Featured Sold Properties
      </h1>
      <div className="-z-10 relative">
        <img className="w-[15%] h-[15%] ms-0 md:ms-6 mt-0 md:mt-4 lg:mt-0 lg:ms-20" src="/GetItSold/DotsWhite.png" alt="" />
      </div>
      <div id="cards-container">
        <div className="card" id="card1">
          <a>
            <div className="overlay">
              <p>
                4 Beds, 4 Baths, 3 Balconies, Unfurnished
              </p>
              <p className="font-bold">
								Vaishali Nagar, Jaipur, Rajasthan
              </p>
							<h4 className="text-5xl">₹2.1 Cr</h4>
            </div>
          </a>
        </div>
        <div className="card" id="card2">
          <a>
            <div className="overlay">
              <p>3 Beds, 4 Baths, 2 Balconies, Unfurnished</p>
              <p className="font-bold">
								Ajmer Road, Jaipur, Rajasthan
              </p>
							<h4 className="text-5xl">₹1.25 Cr</h4>
            </div>
          </a>
        </div>
        <div className="card" id="card3">
          <a>
            <div className="overlay">
              <p>
                4 Beds, 4 Baths, 5 Balconies, Unfurnished
              </p>
							<p className="font-bold">
								Mansarovar, Jaipur, Rajasthan
							</p>
							<h4 className="text-5xl">₹1.33 Cr</h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Property;
