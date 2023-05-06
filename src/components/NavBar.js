import React from "react";
import { BiEnvelope } from "react-icons/bi";

export default function Navbar(props) {
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              to="/"
              className="text-red-500 text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Jam Web Dev
            </a>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none"
            }
            id="example-navbar-warning"
          >
            <ul className="flex gap-5 list-none lg:ml-auto">
              <li className="flex items-center">About Us</li>
              <li className="flex items-center">Services</li>

              <li className="flex items-center">
                <button
                  className="bg-primary flex items-center gap-2 text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                >
                  <BiEnvelope /> Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
