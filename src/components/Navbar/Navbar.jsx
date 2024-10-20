"use client"; // Needed for state in React

import { useState } from "react";
import Image from "next/image";



const Navbar = () => {
const [isProductOpen, setProductOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font fixed w-full z-10 bg-white shadow-md">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center border-gray-300 border rounded-xl py-2 px-2 bg-white">
        <Image
          src="https://clickup.com/assets/brand/logo-v3-clickup-light.svg"
          width={90}
          height={30}
          alt="logo"
        />
        <hr className="h-full border mx-2 border-slate-500" />
        <div className="text-[10px] font-medium text-start text-black cursor-pointer">
          The everything<br /> app will work
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center text-base space-x-4">
        <div className="relative">
          {/* Product Link with Dropdown */}
          <button
            onClick={() => setProductOpen(!isProductOpen)}
            className="hover:bg-pink-100 hover:rounded-lg text-sm p-2 font-semibold cursor-pointer"
          >
            Product
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="inline-block w-4 h-4 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
              />
            </svg>
          </button>

          {/* Dropdown Menu */}
          {isProductOpen && (
            <div className="absolute left-0 mt-2 w-[800px] bg-white shadow-lg border rounded-lg p-6 grid grid-cols-5 gap-4">
              {/* Left Column Links */}
              <div className="space-y-3">
                <p className="font-bold text-sm">Capabilities</p>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  All features
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Integrations
                </a>
              </div>

              {/* Product Management Section */}
              <div className="space-y-3">
                <p className="font-bold text-sm">Project Management</p>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Tasks
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Portfolios
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Board views
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Gantt charts
                </a>
              </div>

              {/* Product Development Section */}
              <div className="space-y-3">
                <p className="font-bold text-sm">Product Development</p>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Sprints
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Sprint Reports
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Kanban
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Roadmap & Backlog
                </a>
              </div>

              {/* Knowledge Management Section */}
              <div className="space-y-3">
                <p className="font-bold text-sm">Knowledge Management</p>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Docs
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Wikis
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Ask AI
                </a>
                <a className="text-sm text-gray-700 hover:text-purple-600 cursor-pointer">
                  Connected Search
                </a>
              </div>

              {/* Brain Section */}
              <div className="space-y-3">
                <p className="font-bold text-sm text-purple-700">Powered by ClickUp Brain</p>
                <ul className="text-sm text-gray-700">
                  <li>✔️ Generate standup</li>
                  <li>✔️ Summarise tasks</li>
                  <li>✔️ Spark ideas</li>
                  <li>✔️ Generate plans</li>
                  <li>✔️ Enhance writing</li>
                  <li>✔️ Create reports</li>
                </ul>
                <button className="text-purple-700 hover:underline mt-2">Learn More</button>
              </div>
            </div>
          )}
        </div>

        <a className="hover:bg-pink-100 hover:rounded-lg text-sm p-2 font-semibold cursor-pointer">
          Solutions
        </a>
        <a className="hover:bg-pink-100 hover:rounded-lg text-sm p-2 font-semibold cursor-pointer">
          Resources
        </a>
        <a className="hover:bg-pink-100 hover:rounded-lg text-sm p-2 font-semibold cursor-pointer">
          Pricing
        </a>
        <a className="hover:bg-pink-100 hover:rounded-lg text-sm p-2 font-semibold cursor-pointer">
          Enterprise
        </a>
      </nav>

      {/* Contact and Authentication Section */}
      <div className="flex items-center space-x-3">
        <a className="text-sm font-semibold py-2 px-3 border rounded-xl hover:bg-pink-100">
          Contact Sales
        </a>
        <button className="py-2 px-4 rounded-lg text-sm font-semibold hover:bg-pink-100">
          Login
        </button>
        <button
          className="py-2 px-4 rounded-lg text-white bg-gradient-to-r from-purple-500 via-purple-600 to-red-500 hover:from-purple-700 hover:via-purple-800 hover:to-purple-600 shadow-lg"
        >
          Sign Up
        </button>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
