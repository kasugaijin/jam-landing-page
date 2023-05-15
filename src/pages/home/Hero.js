import React from "react";
import placeholder from "../../assets/mrJam.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import CtaButton from "../../components/CtaButton";

const Hero = () => {
  const ref = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <header className="header container mx-auto items-center flex h-screen max-h-860-px relative">
      <div className="md:pr-8">
        <h2 className="font-semibold text-6xl text-gray-800">
          We'll bring your online vision to life.
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-gray-600">
          We specialize in building and maintaining websites and full-stack applications in React 
          and Ruby on Rails. Contact us now to learn more about how we can help you.
        </p>
        <div className="mt-6 flex justify-start">
          <CtaButton />
        </div>
      </div>

      <img
        ref={ref}
        src={placeholder}
        className="hidden md:block animation-hidden"
        alt="Character Mr.Jam illustration"
      />
    </header>
  );
};

export default Hero;
