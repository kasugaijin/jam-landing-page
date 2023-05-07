import React from "react";
import placeholder from "../../assets/mrJam.png";

const AboutUs = () => {
  return (
    <section className="pt-20 pb-40 relative bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold text-gray-800 text-center">
              About
            </h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
              At Ruby Jam, we are passionate about helping small businesses and
              entrepreneurs build a strong online presence with custom web
              solutions that are tailored to their unique needs and goals.
            </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600 text-justify">
              We have experience working with diverse clients, from non-profit
              to retail to e-commerce. Whether you need ongoing maintenance and
              support or have future web development needs, we're here to help
              you every step of the way.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img src={placeholder} alt="placeholder" className="w-64" />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Ben Robinson</h5>
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
                <h5 className="text-xl font-bold">Ami Robinson</h5>
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

export default AboutUs;
