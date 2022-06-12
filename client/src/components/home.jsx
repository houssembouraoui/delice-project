import React from "react";

const Home = (props) => {
  return (
    <div style={{ backgroundImage: require("../avatars/images.jpeg") }}>
      <div className="flex flex-wrap justify-center text-center mb-24">
        <div className="w-full lg:w-6/12 px-4"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              src={require("../avatars/courier.png")}
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-blueGray-700">
                Espace Fournisseur
              </h5>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              src={require("../avatars/admin.jpg")}
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-blueGray-700">
                Espace Admin
              </h5>
            </div>
          </div>
        </div>

        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div className="px-6">
            <img
              alt="..."
              src={require("../avatars/engineer.png")}
              className="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div className="pt-6 text-center">
              <h5 className="text-xl font-bold text-blueGray-700">
                Espace Agent
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
