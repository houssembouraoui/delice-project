import React from "react";

const NewUserLogin = () => {
  return (
    <div>
      <div
        className="login_form border-2 border-indigo-500 p-10 pt-5 shadow-sm mx-auto flex rounded"
        style={{ width: "500px" }}
      >
        <div className="sec flex-1">
          <img
            className="mb-3 mx-auto"
            style={{ height: " 150px" }}
            src="https://www.fatcow.com/images/free-logos/World-Wide01.jpg"
            alt=""
          />
          <span className="flex shadow-md mb-5 text-xs">
            <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              Email
            </span>
            <input
              className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
              type="text"
              placeholder="someonespecial@example.com"
            />
          </span>
          <span className="flex shadow-md mb-5 text-xs">
            <span className="bg-indigo-500 w-28 font-bold text-center text-gray-200 p-3 px-5 rounded-l">
              Password
            </span>
            <input
              className="field text-sm text-gray-600 p-2 px-3 rounded-r w-full"
              type="password"
              placeholder=""
            />
          </span>

          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                fill="#648299"
                fillRule="nonzero"
              />
            </svg>
            <select className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
              <option>Choose a color</option>
              <option>Red</option>
              <option>Blue</option> 
              <option>Yellow</option>
              <option>Black</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Gray</option>
              <option>White</option>
            </select>
          </div>
          <a className="text-indigo-500 hover:underline font-bold text-xs ml-auto cursor-pointer">
            Forget Password ?
          </a>
          <span className="border-2 border-indigo-500 hover:bg-indigo-500 hover:text-gray-100 mt-3 text-indigo-500 block text-center p-3 px-4 text-sm rounded cursor-pointer font-bold">
            Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewUserLogin;
