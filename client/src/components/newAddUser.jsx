import React from "react";

const NewAddUser = () => {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded-md shadow-2xl text-black w-full">
            <div className="flex justify-between">
              <h3 className="mb-8 text-1xl text-center">Ajouter</h3>
              <h3 className="mb-8 text-1xl text-center">Ajouter fournisseur</h3>
            </div>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="nom"
              placeholder="Nom"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="prenom"
              placeholder="prenom"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="photo"
              placeholder="Photo"
            />
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
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-blue-300 hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAddUser;
