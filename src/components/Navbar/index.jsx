import React from "react";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around">
        <div className="flex border-gray-300 border rounded-full p-1 items-center">
          <a className="flex title-font font-medium items-center text-gray-900 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-1 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="text-sm mx-1 font-bold">Tailblocks</span>
          </a>
          <div className="text-xs w-28 text-center text-black p-1 font-semibold cursor-pointer">
            The every thing app will work
          </div>
        </div>

        <nav className="flex flex-wrap items-center text-base justify-evenly  border-gray-300  border rounded-full px-3">
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Products
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Second Link
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Third Link
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Fourth Link
          </a>
        </nav>
        <nav className="flex flex-wrap items-center text-base justify-center ">
          <a className="mx-2  hover:bg-pink-100  text-sm font-semibold cursor-pointer px-3 py-3 border-gray-300  border rounded-full">
            Contact Sales
          </a>
        </nav>
        <nav className="flex flex-wrap items-center  justify-center   text-sm font-semibold  border-gray-300  border rounded-full px-3">
          <button className="inline-flex  hover:bg-pink-100 items-center rounded-lg  text-sm font-semibold   md:mt-0 mx-2 p-2">
            Login
          </button>
          <button
            className="inline-flex items-center  text-sm font-semibold  rounded md:mt-0 mx-2 
             text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
             hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-4 py-2 shadow-lg"
          >
            Signup
          </button> 
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
