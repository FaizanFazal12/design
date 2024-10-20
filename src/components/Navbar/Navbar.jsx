"use client"; // Needed for state in React

import { useState } from "react";
import Image from "next/image";



const Navbar = () => {
  const [isProductOpen, setProductOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('capabilities'); // Default to 'capabilities' tab

  return (
    <header className="text-gray-600 body-font fixed w-full z-10 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-center items-center">
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
           The everything <br /> app will work 
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center text-base space-x-4 bg-white border p-1  border-gray-300 rounded-xl mx-5">
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

            {isProductOpen && (

              <div className="absolute left-0 mt-4 w-[1100px] bg-white shadow-lg border rounded-lg  flex gap-4">

                <div className="col-span-1 border-r border-gray-200 dark:border-gray-700 pr-4">
                  <ul className="flex flex-col" role="tablist">

                    <li className=" flex px-4 hover:bg-slate-100 w-[200px] justify-between py-2 cursor-pointer rounded-xl mt-10" role="presentation ">
                      <div className="flex gap-1">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>

                        <button
                          className={`font-medium text-base text-black inline-block border-0 rounded-lg `}
                          onClick={() => setActiveTab('capabilities')}
                          role="tab"
                          aria-controls="capabilities"
                          aria-selected={activeTab === 'capabilities'}
                        >
                          Capabilities
                        </button>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>


                    </li>
                    <li className="flex px-4 hover:bg-slate-100 w-[200px] justify-between py-2 cursor-pointer rounded-xl" role="presentation ">
                      <div className="flex gap-1">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>

                        <button
                          className={`font-medium text-base text-black inline-block border-0 rounded-lg `}
                          onClick={() => setActiveTab('capabilities')}
                          role="tab"
                          aria-controls="capabilities"
                          aria-selected={activeTab === 'capabilities'}
                        >
                          Capabilities
                        </button>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>


                    </li>
                    <li className=" flex px-4 hover:bg-slate-100 w-[200px] justify-between py-2 cursor-pointer rounded-xl" role="presentation ">
                      <div className="flex gap-1">

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4" >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
                        </svg>

                        <button
                          className={`font-medium text-base text-black inline-block border-0 rounded-lg `}
                          onClick={() => setActiveTab('capabilities')}
                          role="tab"
                          aria-controls="capabilities"
                          aria-selected={activeTab === 'capabilities'}
                        >
                          Capabilities
                        </button>
                      </div>

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 w-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>


                    </li>
                  </ul>
                </div>

                {/* Content Area */}
                <div className="col-span-4 pl-4">
                  {activeTab === 'capabilities' && (
                    <div>
                    <div className=" flex gap-16 ">
                      <div>
                        <p className="font-bold text-sm mt-10 ">Project Management</p>
                       <li className="py-1 list-none  hover:bg-slate-100 px-1"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Tasks</a></li>
                       <li className="py-1 list-none  hover:bg-slate-100 px-1"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Portfolios</a></li>
                       <li className="py-1 list-none  hover:bg-slate-100 px-1"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Board views</a></li>
                       <li className="py-1 list-none  hover:bg-slate-100 px-1"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Gantt charts</a></li>
                      </div>
                      <div>
                        <p className="font-bold text-sm mt-10">Product Development</p>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Sprints</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Sprint Reports</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Kanban</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Roadmap & Backlog</a> </li>
                      </div>
                      <div>
                        <p className="font-bold text-sm mt-10">Knowledge Management</p>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Docs</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Wikis</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Ask AI</a> </li>
                        <li  className="py-1 list-none  hover:bg-slate-100" > <a className="text-sm text-gray-700 cursor-pointer">Connected Search</a> </li>
                      </div>
                      <div className="px-2 border-dotted border-2">
                        <div className=" mt-10">

                          <p className="font-bold text-base text-slate-700 mx-2">Powered by
                          </p>

                            <Image src={'https://clickup.com/assets/brand/logo-v3-clickup-brain-light.svg'} height={100} width={130}/>
                          <ul className="text-sm text-gray-700">
                            <li className="py-1">✔️ Generate standup</li>
                            <li className="py-1">✔️ Summarise tasks</li>
                            <li className="py-1">✔️ Spark ideas</li>
                            <li className="py-1">✔️ Generate plans</li>
                            <li className="py-1">✔️ Enhance writing</li>
                            <li className="py-1">✔️ Create reports</li>
                          </ul>
                          <button className="text-slate-700  bg-slate-100 px-10 py-2 hover:bg-slate-200 rounded-xl my-10">Learn More</button>
                        </div>
                      </div>
                    </div>
                    <div className="border flex justify-end ">
                    <li className="py-1 list-none  hover:bg-slate-100 px-3 rounded-xl mx-4"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Contact Sales</a></li>
                    <li className="py-1 list-none  hover:bg-slate-100 px-3 rounded-xl mx-4"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Watch Demo</a></li>
                    <li className="py-1 list-none  hover:bg-slate-100 px-3 rounded-xl mx-4"> <a className="text-sm py-2 text-gray-700 cursor-pointer">Download apps</a></li>
                    </div>
                    </div>

                  )}

                  {/* Blank Content for Other Tabs */}
                  {(activeTab === 'features' || activeTab === 'integrations') && (
                    <div className="space-y-3">
                      <p className="text-sm text-gray-700">No content available.</p>
                    </div>
                  )}
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
          <a className="text-sm font-semibold py-3 px-3 border rounded-xl hover:bg-pink-100 bg-white"  >
            Contact Sales
          </a>
          <div className="border rounded-xl px-1 bg-white ">

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

      </div>
    </header>
  );
};

export default Navbar;



{/* <div class="md:flex">
    <ul class="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 text-white bg-blue-700 rounded-lg active w-full dark:bg-blue-600" aria-current="page">
                <svg class="w-4 h-4 me-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>
                Profile
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18"><path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/></svg>
                Dashboard
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                </svg>
                Settings
            </a>
        </li>
        <li>
            <a href="#" class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white">
                <svg class="w-4 h-4 me-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
                    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
                </svg>
                Contact
            </a>
        </li>
        <li>
            <a class="inline-flex items-center px-4 py-3 text-gray-400 rounded-lg cursor-not-allowed bg-gray-50 w-full dark:bg-gray-800 dark:text-gray-500">
                <svg class="w-4 h-4 me-2 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
                </svg>
            Disabled</a>
        </li>
    </ul>
    <div class="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Profile Tab</h3>
        <p class="mb-2">This is some placeholder content the Profile tab's associated content, clicking another tab will toggle the visibility of this one for the next.</p>
        <p>The tab JavaScript swaps classes to control the content visibility and styling.</p> 
    </div>
</div> */}

