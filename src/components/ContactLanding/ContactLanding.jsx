import React from "react";
import './Style.css'

const ContactLanding = () => {
  return (
    <div className="w-screen overflow-hidden">
      <div className="flex-col md:flex-row lg:flex-row flex gap-6 items-center pb-16 pt-10 ps-0 md:ps-2 lg:ps-7">
        <div className="bg-white shadow-md shadow-[#ADD8E6] flex p-7 md:p-5 sm:w-full md:w-[35vw] lg:w-[29%] lg:p-10 gap-5 rounded-3xl">
          <img src="/Contact/Call.png" alt="" className="h-[8vh] md:h-[7vh] lg:h-[7vh] w-[9vw] md:w-[6vw] lg:w-[4vw]" />
          <div>
            <h1 className="uppercase text-black">Phone Number</h1>
            <h1 className="text-black font-bold text-3xl">+91 9982265714</h1>
          </div>
        </div>

        <div className="bg-white shadow-md shadow-[#ADD8E6] flex p-7 md:p-5 sm:w-full md:w-[60%] lg:w-[44%] lg:p-10 gap-5 rounded-3xl">
          <img src="/Contact/Contact.png" alt="" className="h-[13vh] md:h-[7vh] lg:h-[7vh] w-[20vw] md:w-[8vw] lg:w-[3.5vw]" />
          <div>
            <h1 className="uppercase text-black">Email</h1>
            <h1 className="text-black font-bold text-3xl">
              <p className="text">bansal.lokesh 25@gmail.com</p>
              <p className="text1">bansal.lokesh25@gm ail.com</p>
              <p className="text2">bansal.lokesh25@gmail.com</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-col md:flex-row lg:flex-row flex items-center pb-16 ps-0 md:ps-2 lg:ps-7 -mt-10">
        <div className="bg-white shadow-lg shadow-[#ADD8E6] flex p-7 md:p-5 mt-0 md:-mt-32 lg:mt-0 w-[90%] md:w-full lg:w-[75%] lg:p-10 gap-6 px-32 rounded-3xl">
          <img src="/Contact/Address.png" alt="" className="imageLocation h-[7vh] md:h-[7vh] lg:h-[9vh] w-[5vw] md:w-[8vw] lg:w-[5vw]" />
          <div>
            <h1 className="uppercase text-black">Address</h1>
            <h1 className="text-black -ms-20 md:ms-0 lg:ms-0 font-bold text-3xl">
              Antra.Hospital, Jawahar.Nagar, Jaipur, India
            </h1>
          </div>
        </div>
        <img src="/Contact/Landing.png" alt="" className="ps-4 md:ps-4 lg:ps-9 w-[90%] md:w-full lg:w-[21%] h-[80%] md:h-[30vh] lg:h-[50%] mt-6 md:mt-0 lg:-mt-40 rounded-3xl" />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.316441839934!2d75.83554649359716!3d26.893450558844027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7a01a3a87c7%3A0xf7acb2dfa996cc44!2sAntra%20Hospital!5e0!3m2!1sen!2sin!4v1730521078276!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="pb-10"
      />
    </div>
  );
};

export default ContactLanding;
