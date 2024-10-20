import React from "react";
import Image from 'next/image'

// https://clickup.com/assets/brand/logo-v3-clickup-light.svg

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font fixed w-[100%] z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center">
        {/* Logo Section */}

        <div className="flex border-gray-300 border rounded-xl justify-around items-center p-1">
        <Image src='https://clickup.com/assets/brand/logo-v3-clickup-light.svg' width={100} height={30}/>
          <hr  className="h-full border mx-2 border-slate-500"/>
          <div className="text-[10px] font-medium w-24 text-start text-black  cursor-pointer text-wrap  ">
            The every thing
           <br/> app will work
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center text-base justify-evenly border-gray-300 border rounded-xl px-3 relative mr-20 ml-5">
          {/* Product Dropdown */}
          <details className="relative">
            <summary className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer list-none flex items-center ">
              Product
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mx-1 size-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
</svg>

            </summary>

            {/* Dropdown Menu */}
            <div
              className="absolute left-0 mt-2 w-64 bg-white shadow-lg border rounded-lg p-4 
              grid grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 1
                </a>
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 2
                </a>
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 3
                </a>
              </div>
              <div className="flex flex-col">
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 4
                </a>
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 5
                </a>
                <a className="hover:text-purple-600 text-gray-700 text-sm font-medium cursor-pointer">
                  Product 6
                </a>
              </div>
            </div>
          </details>

          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Solution
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Resources
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Pricing
          </a>
          <a className="mx-2 hover:bg-pink-100 hover:rounded-lg text-sm p-1 font-semibold cursor-pointer">
            Enterprise
          </a>
        </nav>

        {/* Contact and Authentication Section */}
        <div className="mx-2 flex gap-2">

        <nav className="flex flex-wrap items-center text-base justify-center">
          <a className="mx-2 text-sm font-semibold  py-2 px-3  hover:bg-pink-100  cursor-pointer  border-gray-300 border rounded-xl">
            Contact Sales
          </a>
        </nav>

        <nav className="flex flex-wrap items-center justify-center text-sm font-semibold border-gray-300 border rounded-xl ">
          <button className="inline-flex hover:bg-pink-100 items-center rounded-lg text-sm font-semibold md:mt-0 mx-2 p-2">
            Login
          </button>
          <button
            className="inline-flex items-center text-sm font-semibold rounded md:mt-0 mx-2 
             text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 
             hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 px-4 py-2 shadow-lg"
          >
            Signup
          </button>
        </nav>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
