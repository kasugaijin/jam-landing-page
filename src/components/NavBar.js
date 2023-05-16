import React from "react";
import { useState } from "react";
import Contact from "./Contact";
// import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <nav className="top-0 fixed w-full py-3 bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo*/}
        <a
          className="text-red-500 text-xl font-bold leading-relaxed inline-block py-2 uppercase"
          href="/"
        >
          Ruby Jam
        </a>

        {/* menu links */}
        <div className="hidden md:flex gap-5 items-center bg-white">
          <a href="A" className=" text-gray-800 hover:text-primary">
            About Us
          </a>
          <a href="A" className=" text-gray-800 hover:text-primary">
            Services
          </a>
          <Contact className="text-gray-800 hover:text-primary" showEnvelope={false}/>
        </div>

        {/* Hamburger button */}
        <button
          className="hamburger block md:hidden text-primary focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          onClick={handleClick}
        >
          <svg
            className="hamburger fill-primary"
            viewBox="0 0 100 100"
            width="50"
            height="50"
            transform="scale(0.8)"
          >
            <rect
              className="line top"
              width="80"
              height="10"
              x="10"
              y="25"
              rx="5"
            ></rect>
            <rect
              className="line middle"
              width="80"
              height="10"
              x="10"
              y="45"
              rx="5"
            ></rect>
            <rect
              className="line bottom"
              width="80"
              height="10"
              x="10"
              y="65"
              rx="5"
            ></rect>
          </svg>
        </button>
      </div>
      {/* mobile menu */}
      <div
        className={` 
        absolute md:hidden top-15 right-0 w-40 bg-gray-800 bg-opacity-90 transition-transform duration-300 ease-in-out transform-gpu p-4 rounded-md flex flex-col items-end ${
          isOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <a
          href="a"
          className="block text-white hover:text-primary mb-2 mr-1"
        >
          About Us
        </a>
        <a
          href="a"
          className="block text-white hover:text-primary mb-2 mr-1"
        >
          Services
        </a>
        <Contact className="block text-white hover:text-primary" showEnvelope={false}/>
      </div>
    </nav>
  );
}
