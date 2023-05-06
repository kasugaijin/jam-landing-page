import React from "react";
import mrJam from "../assets/mrJam.png";

const Hero = () => {
  return (
    <header className="header container mx-auto items-center flex h-screen max-h-860-px">
      <div className="pr-8">
        <h2 className="font-semibold text-8xl text-gray-800">
          Create Awesome Web App
        </h2>
        <p className="mt-8 text-3xl leading-relaxed text-gray-600">
          Notus React is Free and Open Source. It does not change any of the CSS
          from . It features multiple HTML elements and it comes with dynamic
          components for ReactJS, Vue and Angular.
        </p>
      </div>

      <img src={mrJam} alt="Character Mr.Jam illustration" />
    </header>
  );
};

export default Hero;
