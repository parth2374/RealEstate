import React from "react";
import CardContainer from "../components/Listings/Card";
import Footer from "../components/Footer/Footer";

const Listings = () => {
  return (
    <div className="bg-black">
      <CardContainer
        imageUrl1={"/Card Image/1.jpg"}
        descriptionOne1={"4 Beds, 4 Baths, 3 Balconies, Unfurnished"}
        descriptionTwo1={"Vaishali Nagar, Jaipur, Rajasthan"}
        title1={"₹1.74 Cr"}
        imageUrl2={"/Card Image/2.jpg"}
        descriptionOne2={"3 Beds, 3 Baths, 1 Covered Parking, Semi-Furnished"}
        descriptionTwo2={"C-Scheme, Jaipur, Rajasthan"}
        title2={"₹2.95 Cr"}
        imageUrl3={"/Card Image/3.jpg"}
        descriptionOne3={"3 Beds, 3 Baths, Unfurnished"}
        descriptionTwo3={"Ajmer Road, Jaipur, Rajasthan"}
        title3={"₹81.4 Lac"}
      />

      <div className="-mt-24 md:-mt-20 lg:-mt-60">
        <CardContainer
          imageUrl1={"/Card Image/4.jpg"}
          descriptionOne1={"5 Beds, 5 Baths, 1 Covered Parking, Unfurnished"}
          descriptionTwo1={"Vaishali Nagar, Jaipur, Rajasthan"}
          title1={"₹1.49 Cr"}
          imageUrl2={"/Card Image/5.jpg"}
          descriptionOne2={"3 Beds, 3 Baths, 1 Covered Parking, Semi-Furnished"}
          descriptionTwo2={"Vaishali Nagar, Jaipur, Rajasthan"}
          title2={"₹70.7 Lac"}
          imageUrl3={"/Card Image/6.jpg"}
          descriptionOne3={"3 Beds, 2 Baths, Unfurnished"}
          descriptionTwo3={"Kalwar Road, Jaipur, Rajasthan"}
          title3={"₹42 Lac"}
        />
      </div>

      <div className="-mt-24 md:-mt-20 lg:-mt-60">
        <CardContainer
          imageUrl1={"/Card Image/7.jpg"}
          descriptionOne1={"4 Beds, 4 Baths, Unfurnished"}
          descriptionTwo1={"Mansarovar Extension, Jaipur, Rajasthan"}
          title1={"₹1.43 Cr"}
          imageUrl2={"/Card Image/8.jpg"}
          descriptionOne2={"3 Beds, 3 Baths, 1 Covered Parking, Unfurnished"}
          descriptionTwo2={"Ajmer Road, Jaipur, Rajasthan"}
          title2={"₹88.8 Lac"}
          imageUrl3={"/Card Image/9.jpg"}
          descriptionOne3={"3 Beds, 3 Baths, 1 Covered Parking, Semi-Furnished"}
          descriptionTwo3={"Vaishali Nagar, Jaipur, Rajasthan"}
          title3={"₹80 Lac | ₹2 Per sq. Unit Monthly"}
        />
      </div>

      <div className="-mt-24 md:-mt-20 lg:-mt-60">
        <CardContainer
          imageUrl1={"/Card Image/10.jpg"}
          descriptionOne1={"4 Beds, 3 Baths, Unfurnished"}
          descriptionTwo1={"Jawahar Circle, Jaipur, Rajasthan"}
          title1={"₹2.48 Cr"}
          imageUrl2={"/Card Image/11.jpg"}
          descriptionOne2={"4 Beds, 4 Baths, 1 Covered Parking, Unfurnished"}
          descriptionTwo2={"Mansarovar, Jaipur, Rajasthan"}
          title2={"₹3.11 Cr"}
          imageUrl3={"/Card Image/12.jpg"}
          descriptionOne3={"2 Beds, 2 Baths, Unfurnished"}
          descriptionTwo3={"Ajmer Road, Jaipur, Rajasthan"}
          title3={"₹60.3 Lac"}
        />
      </div>

      <div className="-mt-24 md:-mt-20 lg:-mt-60">
        <CardContainer
          imageUrl1={"/Card Image/13.jpg"}
          descriptionOne1={"4 Beds, 4 Baths, 1 Covered Parking, Semi-Furnished"}
          descriptionTwo1={"Mansarovar, Jaipur, Rajasthan"}
          title1={"₹98.7 Lac"}
          imageUrl2={"/Card Image/14.jpg"}
          descriptionOne2={"2 Beds, 2 Baths, Unfurnished"}
          descriptionTwo2={"Vaishali Nagar, Jaipur, Rajasthan"}
          title2={"₹65.5 Lac"}
          imageUrl3={"/Card Image/15.jpg"}
          descriptionOne3={"3 Beds, 3 Baths, Semi-Furnished"}
          descriptionTwo3={"Vaishali Nagar, Jaipur, Rajasthan"}
          title3={"₹1.25 Cr | ₹1,000 Monthly"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
