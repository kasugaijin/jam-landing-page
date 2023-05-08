import React from "react";
import { MdWebAsset } from "react-icons/md";
import { MdWeb } from "react-icons/md";
import { TbTool } from "react-icons/tb";

const Services = () => {
  return (
    <section className="pt-10 pb-10 relative bg-secondary">
      <div
        className="-mt-20 top-0 left-0 right-0 w-full absolute h-20"
        style={{ transform: "translateZ(0)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-secondary fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center text-center mb-24">
            <div className="w-full lg:w-6/12 px-4  text-white">
              <h2 className="text-4xl font-semibold">What we can do for you</h2>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-4/12 px-4 text-center h-96">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <MdWebAsset className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                  <h6 className="text-xl font-semibold text-gray-800">
                    Websites
                  </h6>
                  <p className="mt-2 mb-4 text-gray-700">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center h-96">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <MdWeb className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                  <h6 className="text-xl font-semibold text-gray-800">
                    Full-stack Apps
                  </h6>
                  <p className="mt-2 mb-4 text-gray-700">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center h-96">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <TbTool className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-secondary" />
                  <h6 className="text-xl font-semibold text-gray-800">
                    Maintenance
                  </h6>
                  <p className="mt-2 mb-4 text-gray-700">
                    Divide details about your product or agency work into parts.
                    A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
