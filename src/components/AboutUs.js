import React from "react";

const AboutUs = () => {
  return (
    <section className="pt-20 pb-40 relative bg-primary">
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
            className="text-primary fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
              <img
                alt="..."
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <h4 className="text-xl font-bold text-gray-800">
                  Great for your awesome project
                </h4>
                <p className="text-md font-light mt-2 text-gray-600">
                  Putting together a page has never been easier than matching
                  together pre-made components. From landing pages presentation
                  to login areas, you can easily customise and built your pages.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full md:w-6/12 px-4">
            <div className="text-white">
              <h3 className="text-6xl">About Us</h3>
              <p className="text-base mt-5">
                Do culpa ea culpa fugiat incididunt dolor reprehenderit aute
                Lorem ad ut. In nostrud cupidatat sint sunt laboris aute elit
                laborum consequat nulla sunt amet. Eiusmod eu amet esse nostrud
                ipsum enim elit id officia fugiat culpa. Est veniam culpa ad ea.
                Aute consequat dolor in eiusmod duis ullamco dolore amet. Aute
                velit officia velit nostrud eiusmod est exercitation occaecat
                laborum reprehenderit consequat. Aliqua est est enim voluptate
                Lorem anim adipisicing sit commodo esse cillum exercitation.
                Anim eu commodo laborum laborum. Et est irure quis consequat
                elit magna deserunt commodo pariatur Lorem est consectetur.
                Tempor culpa minim officia tempor dolor minim laboris mollit
                quis id ad qui. Fugiat officia enim irure laboris velit. Fugiat
                consectetur deserunt mollit dolor. Amet occaecat nulla duis et
                fugiat nulla et officia ex duis velit consectetur esse commodo.
                Pariatur do eu proident reprehenderit. Minim sunt et occaecat
                exercitation dolor ut ea. Commodo deserunt nisi incididunt
                cillum cillum exercitation incididunt nisi amet culpa anim
                cillum Lorem dolor. Excepteur voluptate deserunt esse
                adipisicing anim cupidatat nostrud voluptate veniam. Sint
                excepteur mollit culpa eiusmod commodo tempor amet ex ipsum
                irure dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="text-white">
            <h3 className="text-6xl">About Us</h3>
            <p className="text-base mt-5">
              Do culpa ea culpa fugiat incididunt dolor reprehenderit aute Lorem
              ad ut. In nostrud cupidatat sint sunt laboris aute elit laborum
              consequat nulla sunt amet. Eiusmod eu amet esse nostrud ipsum enim
              elit id officia fugiat culpa. Est veniam culpa ad ea. Aute
              consequat dolor in eiusmod duis ullamco dolore amet. Aute velit
              officia velit nostrud eiusmod est exercitation occaecat laborum
              reprehenderit consequat. Aliqua est est enim voluptate Lorem anim
              adipisicing sit commodo esse cillum exercitation. Anim eu commodo
              laborum laborum. Et est irure quis consequat elit magna deserunt
              commodo pariatur Lorem est consectetur. Tempor culpa minim officia
              tempor dolor minim laboris mollit quis id ad qui. Fugiat officia
              enim irure laboris velit. Fugiat consectetur deserunt mollit
              dolor. Amet occaecat nulla duis et fugiat nulla et officia ex duis
              velit consectetur esse commodo. Pariatur do eu proident
              reprehenderit. Minim sunt et occaecat exercitation dolor ut ea.
              Commodo deserunt nisi incididunt cillum cillum exercitation
              incididunt nisi amet culpa anim cillum Lorem dolor. Excepteur
              voluptate deserunt esse adipisicing anim cupidatat nostrud
              voluptate veniam. Sint excepteur mollit culpa eiusmod commodo
              tempor amet ex ipsum irure dolor.
            </p>
          </div> */}
    </section>
  );
};

export default AboutUs;
