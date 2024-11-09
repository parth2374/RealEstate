import React from "react";
import { Link } from "react-router-dom";
import './Style.css'

const Navbar = () => {
  return (
    <div className="flex justify-center -ms-0 md:-ms-2 lg:ms-0 pt-5 text-black">
      <header className="bg-white rounded-3xl absolute flex justify-between w-[90%] md:w-[100%] lg:w-[50%]">
        <div className="logo">
          <Link to='/'><img src="/Logo.png" alt="Logo" className="ps-0 md:ps-0 lg:ps-3" /></Link>
        </div>
        <nav className="pe-3">
          <ul>
            <li className="active btnNew cursor-pointer"><Link to='/'>Home</Link></li>
            <li className="cursor-pointer btnNew"><Link to='/listings'>Listings</Link></li>
            <li className="cursor-pointer btnNew"><Link to='/about'>About</Link></li>
            <li className="cursor-pointer btnNew"><Link to='/contact'>Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;