import axios from "axios";
import React, { useState, useEffect } from "react";
// the span for the no payéeéeéeé
{
  /* <span class="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
<span
  aria-hidden
  class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
></span>
<span class="relative text-xs">not active</span>
</span> */
}

const FactureList = () => {
  const [list, setList] = useState([]);
  console.log(list);

  useEffect(() => {
    axios
      .get("http://localhost:5000/factures")
      .then((result) => setList(result.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div class="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table class="min-w-full">
            <thead>
              <tr>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  inscription
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  immatriculation
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  fournisseur
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  montant
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  Created At
                </th>
                <th class="px-6 py-3 border-b-2 border-gray-300"></th>
              </tr>
            </thead>
            <tbody class="bg-white">
              {list &&
                list.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div class="flex items-center">
                          <div>
                            <div class="text-sm leading-5 text-gray-800">
                              {e.date}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div class="text-sm leading-5 text-blue-900">
                          fournisseur name
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        damilareanjorin1@gmail.com
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        +2348106420637
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative text-xs">active</span>
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                        September 12
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                        <button class="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                          View Details
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FactureList;
