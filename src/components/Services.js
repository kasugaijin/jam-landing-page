import React from "react";

const Services = () => {
  return (
    <section className="relative items-center pt-20 pb-20">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
            className="text-white fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="flex relative flex-wrap container mx-auto">
        <div className="w-full md:w-6/12 pr-24">
          <h3 className="text-6xl text-gray-800">Services</h3>
          <p className="text-base mt-5 text-gray-600">
            Do culpa ea culpa fugiat incididunt dolor reprehenderit aute Lorem
            ad ut. In nostrud cupidatat sint sunt laboris aute elit laborum
            consequat nulla sunt amet. Eiusmod eu amet esse nostrud ipsum enim
            elit id officia fugiat culpa. Est veniam culpa ad ea. Aute consequat
            dolor in eiusmod duis ullamco dolore amet. Aute velit officia velit
            nostrud eiusmod est exercitation occaecat laborum reprehenderit icia
            ex duis velit consectetur esse commodo. Pariatur do eu proident
            reprehenderit. Minim sunt et occaecat exercitation dolor ut ea.
            Commodo deserunt nisi incididunt cillum cillum exercitation
            incididunt nisi amet culpa anim cillum Lorem dolor. Excepteur
            voluptate deserunt esse adipisicing anim cupidatat nostrud voluptate
            veniam. Sint excepteur mollit culpa eiusmod commodo tempor amet ex
            ipsum irure dolor.
          </p>
        </div>
        <div className="w-full md:w-6/12 px-4 mr-auto ml-auto">
          <div className="justify-center flex flex-wrap relative">
            <div className="my-4 w-full lg:w-6/12 px-4">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Svelte
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    ReactJS
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-gray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    NextJS
                  </p>
                </div>
              </a>
            </div>
            <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    JavaScript
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Angular
                  </p>
                </div>
              </a>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                target="_blank"
              >
                <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                  <img
                    alt="..."
                    className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                    src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                  />
                  <p className="text-lg text-white mt-4 font-semibold">
                    Vue.js
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
