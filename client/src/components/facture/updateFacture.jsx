import React, { useState } from "react";
import UserNav from "../../layouts/userNav";

const Facture = () => {
  let [imma, setImma] = useState(getImma());

  function getImma() {
    return Math.floor(Math.random() * 1200);
  }

  return (
    <div>
      <div class="lg:w-1/12 xl:w-1/4"></div>
      <div class="w-full bg-white lg:w-full xl:w-2/3 lg:mt-20 lg:mb-20 lg:shadow-xl xl:mt-02 xl:mb-20 xl:shadow-xl print:transform print:scale-90">
        <header class="flex flex-col items-center px-8 pt-20 text-lg text-center bg-white border-t-8 border-green-700 md:block lg:block xl:block print:block md:items-start lg:items-start xl:items-start print:items-start md:text-left lg:text-left xl:text-left print:text-left print:pt-8 print:px-2 md:relative lg:relative xl:relative print:relative">
          <img
            class="w-3/6 h-auto md:w-1/4 lg:ml-12 xl:ml-12 print:px-0 print:py-0"
            src="https://via.placeholder.com/200x100.png"
          />
          <div class="flex flex-row mt-12 mb-2 ml-0 text-2xl font-bold md:text-3xl lg:text-4xl xl:text-4xl print:text-2xl lg:ml-12 xl:ml-12">
            INVOICE
            <div class="text-green-700">
              <span class="mr-4 text-sm">■ </span> #
            </div>
            <span id="invoice_id" class="text-gray-500">
              0196023
            </span>
          </div>
          <div class="flex flex-col lg:ml-12 xl:ml-12 print:text-sm">
            <span>{new Date().toDateString()}</span>
            <span>Paid date: 2020.09.07</span>
            <span>Due date: 2020.10.06</span>
          </div>
          <div class="px-8 py-2 mt-16 text-3xl font-bold text-green-700 border-4 border-green-700 border-dotted md:absolute md:right-0 md:top-0 md:mr-12 lg:absolute lg:right-0 lg:top-0 xl:absolute xl:right-0 xl:top-0 print:absolute print:right-0 print:top-0 lg:mr-20 xl:mr-20 print:mr-2 print:mt-8">
            PAID
          </div>
          <contract class="flex flex-col m-12 text-center lg:m-12 md:flex-none md:text-left md:relative md:m-0 md:mt-16 lg:flex-none lg:text-left lg:relative xl:flex-none xl:text-left xl:relative print:flex-none print:text-left print:relative print:m-0 print:mt-6 print:text-sm">
            <span class="font-extrabold md:hidden lg:hidden xl:hidden print:hidden">
              FROM
            </span>
            <from class="flex flex-col">
              <div class="mb-4 relative">
                <input
                  class="input border border-gray-400 appearance-none rounded w-25 px-3 py-3 pt-5 pb-2 focus focus:border-gray-600 focus:outline-none active:outline-none active:border-indigo-600"
                  type="text"
                  autofocus
                  placeholder="date"
                />
              </div>
              <div class="mb-4 relative">
                <input
                  class="input border border-gray-400 appearance-none rounded w-25 px-3 py-3 pt-5 pb-2 focus focus:border-gray-600 focus:outline-none active:outline-none active:border-indigo-600"
                  type="text"
                  autofocus
                  placeholder="immatriculation"
                />
              </div>
            </from>
            <span class="mt-12 font-extrabold md:hidden lg:hidden xl:hidden print:hidden">
              TO
            </span>
            <to class="flex flex-col md:absolute md:right-0 md:text-right lg:absolute lg:right-0 lg:text-right print:absolute print:right-0 print:text-right">
              <div class="mb-4 relative">
                <input
                  class="input border border-gray-400 appearance-none rounded w-25 px-3 py-3 pt-5 pb-2 focus focus:border-gray-600 focus:outline-none active:outline-none active:border-indigo-600"
                  type="text"
                  autofocus
                  placeholder="fournisseur"
                />
              </div>
            </to>
          </contract>
        </header>
        <hr class="border-gray-300 md:mt-8 print:hidden" />
      </div>
      <div class="lg:w-1/12 xl:w-1/4"></div>
    </div>
  );
};

export default Facture;
