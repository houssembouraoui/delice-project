import axios from "axios";
import React, { useContext, useState } from "react";

import { Context } from "../contextBidou";

const UpdateUser = () => {
  let user = useContext(Context);
  let [currentUser, setCurrentUser] = useState(user.userValue);

  console.log(currentUser, "el utilisator");
  let updateData = () => {
    axios
      .put(`http://localhost:5000/users/update/${user.role}`, currentUser)
      .then(() => console.log("done"));
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded-md shadow-2xl text-black w-full">
            <div className="flex ">
              <h3 className="mb-8 text-1xl ">
                update {user.userValue.firstname}
              </h3>
            </div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="nom"
              placeholder="Nom"
              onChange={(e) =>
                setCurrentUser({ ...currentUser, firstname: e.target.value })
              }
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="prenom"
              placeholder="prenom"
              onChange={(e) =>
                setCurrentUser({ ...currentUser, lastname: e.target.value })
              }
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) =>
                setCurrentUser({ ...currentUser, email: e.target.value })
              }
            />
            <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-purple-300 group ">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg
                  className="w-10 h-10 text-purple-400 group-hover:text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <p className="lowercase text-sm text-gray-400 group-hover:text-purple-600 pt-1 tracking-wider">
                  Select a photo
                </p>
              </div>
              <input
                type="file"
                // onChange={(e) => {
                //   uploadImage(e.target.files[0]);
                // }}
                className="hidden"
              />
            </label>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="adress"
              placeholder="Adress"
            />
            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone"
              placeholder="phone"
              onChange={(e) =>
                setCurrentUser({ ...currentUser, phonenumber: +e.target.value })
              }
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-300 hover:bg-green-dark focus:outline-none my-1"
              onClick={() => updateData()}
            >
              Update {currentUser.firstname}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
