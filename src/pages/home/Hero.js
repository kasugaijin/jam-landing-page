import React from "react";
import placeholder from "../../assets/mrJam.png";

const Hero = () => {
  return (
    <header className="header container mx-auto items-center flex h-screen max-h-860-px relative">
      <div className="md:pr-8">
        <h2 className="font-semibold text-6xl text-gray-800">
          Custom web solutions designed just for you
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-gray-600">
          From concept to care, we build and maintain custom websites and
          full-stack applications specialized in React and Ruby on Rails. We'll
          bring your online vision to life and keep it running smoothly.
        </p>
      </div>

      <img
        src={placeholder}
        className="hidden md:block"
        alt="Character Mr.Jam illustration"
      />
    </header>
  );
};

export default Hero;
