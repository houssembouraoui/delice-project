import React from "react";
import Test from "./contextTest";
import InvoiceTemplate from "./invoiceTemplate";
import NewAddUser from "./newAddUser";

const Home = (props) => {
  return (
    <div style={{ backgroundImage: require("../avatars/images.jpeg") }}>
      <div class="flex flex-wrap justify-center text-center mb-24">
        <div class="w-full lg:w-6/12 px-4"></div>
      </div>
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div class="px-6">
            <img
              alt="..."
              src={require("../avatars/courier.png")}
              class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold text-blueGray-700">
                Espace Fournisseur
              </h5>
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div class="px-6">
            <img
              alt="..."
              src={require("../avatars/admin.jpg")}
              class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold text-blueGray-700">Espace Admin</h5>
            </div>
          </div>
        </div>

        <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-8">
          <div class="px-6">
            <img
              alt="..."
              src={require("../avatars/engineer.png")}
              class="shadow-lg rounded-full mx-auto max-w-120-px"
            />
            <div class="pt-6 text-center">
              <h5 class="text-xl font-bold text-blueGray-700">Espace Agent</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
