import React from "react";
import placeholder from "../assets/mrJam.png";

const Staff = () => {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Here are our heroes</h2>
            <p className="text-lg leading-relaxed m-4 text-blueGray-500">
              According to the National Oceanic and Atmospheric Administration,
              Ted, Scambos, NSIDClead scentist, puts the potentially record
              maximum.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img src={placeholder} alt="placeholder" className="w-64" />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ryan Tompson</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  Web Developer
                </p>
              </div>
            </div>
          </div>
          <div className="lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img src={placeholder} alt="placeholder" className="w-64" />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Alexa Smith</h5>
                <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                  UI/UX Designer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staff;
