import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="top-0 fixed z-50 w-full py-3 bg-white shadow">
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
          <button className="btn-primary flex items-center" type="button">
            <BiEnvelope /> Contact
          </button>
        </div>

        {/* Hamburger button */}
        <button
          className="block md:hidden text-primary hover:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-white"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <IoMdMenu className="md:hidden w-8 h-8" />
        </button>
      </div>
      {/* mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden container mx-auto flex flex-col items-end gap-5 bg-white`}
      >
        <a href="a" className=" text-gray-800 hover:text-primary">
          About Us
        </a>
        <a href="a" className=" text-gray-800 hover:text-primary">
          Services
        </a>
        <button className="btn-primary flex items-center" type="button">
          <BiEnvelope /> Contact
        </button>
      </div>
    </nav>
  );
}
