import Image from 'next/image';
import React from 'react'
export default function Article() {
  const cards = Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className={` flex flex-col border border-slate-300 rounded-2xl mx-5 md:max-w-[330px] my-4 md:my-0 relative bottom-16  bg-white`}
    >
      <div
        className="bg-contain bg-no-repeat  h-[300px]  md:h-64  rounded-t-2xl" // Adjusted height and width here
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/w8fc6tgspyjz/1ohjwk74KF0UBDAusNVMMZ/e85360781ed3340b347de644df28d8ce/SOP-templates.png?fm=avif&q=50&w=1200')",
        }}
      >
        {/* Background Image */}
      </div>
      <div className="mx-7 p-3">
        <h2 className="text-xl font-extrabold text-slate-950 mb-2">10 Free SOP Templates and How to Write an SOP for Your Team</h2>
        <h3 className='font-bold text-base text-slate-900'> Lesley Messer        </h3>
        <p className="text-gray-700 text-base font-semibold mb-4">
          Head of Editorial at ClickUp
        </p>
        <div className="hidden whitespace-nowrap bg-slate-100 rounded-2xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block py-1 px-3 hover:bg-slate-200 cursor-pointer">
          Read more
        </div>
      </div>
    </div>
  ));
  return (
    <>
      <div className='container mx-auto'>
        <div className='my-24'>
          <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-3">
            From our Blog
          </div>
          <div className="text-slate-950 font-extrabold text-5xl my-5 text-center">
            Related Articles

          </div>
        </div>


      </div>
      <div className='md:flex justify-center items-center bg-slate-100 border border-slate-300 relative'>
        {cards}
      </div>
      <div className="border border-slate-200">
  <div className="container mx-auto my-5 lg:flex justify-center gap-10 ">
    {/* <!-- Heading that takes 100% width on small screens --> */}
    <div className=" flex gap-2 items-center text-base font-semibold w-full text-center mb-4 lg:mb-0 lg:w-2/12 lg:text-left">
    <Image src="https://clickup.com/assets/brand/logo-v3-clickup-symbol-only.svg" width={20} height={10} />
      The everything app for work.
    </div>

  {/* Vertical Divider */}
  <div className="hidden lg:block w-1 h-auto bg-gray-200" />
    {/* <!-- Flex Container for Icons and Labels --> */}.
    
    <div className="flex md:flex-row flex-col lg:gap-10 lg:w-9/12">
  {/* Item 1 */}
  <div className="flex items-center gap-2 lg:w-2/12 mb-4 lg:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 11c0-3.866-3.582-7-8-7m16 0c-4.418 0-8 3.134-8 7m8 0c0 3.866-3.582 7-8 7m-8 0c4.418 0 8-3.134 8-7"
      />
    </svg>
    <span className="text-base font-medium">24/7 support</span>
  </div>

  {/* Vertical Divider */}
  <div className="hidden lg:block w-1 h-auto bg-gray-200" />

  {/* Item 2 */}
  <div className="flex items-center gap-2 lg:w-2/12 mb-4 lg:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 8.25V12l3 1.5"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3h10.5a2.25 2.25 0 012.25 2.25v13.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18.75V5.25A2.25 2.25 0 016.75 3z"
      />
    </svg>
    <span className="text-base font-medium">Weekly updates</span>
  </div>

  {/* Vertical Divider */}
  <div className="hidden lg:block w-1 h-auto bg-gray-200" />

  {/* Item 3 */}
  <div className="flex items-center gap-2 lg:w-2/12 mb-4 lg:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5l7.5 13.5H4.5L12 4.5z"
      />
    </svg>
    <span className="text-base font-medium">Secure and compliant</span>
  </div>

  {/* Vertical Divider */}
  <div className="hidden lg:block w-1 h-auto bg-gray-200" />

  {/* Item 4 */}
  <div className="flex items-center gap-2 lg:w-2/12 mb-4 lg:mb-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v3.75h3.75M3 21l7.5-7.5m6.75 0V3h3.75v3.75H21M16.5 21l7.5-7.5M12 3v18"
      />
    </svg>
    <span className="text-base font-medium">99.9% uptime</span>
  </div>
</div>

  </div>
</div>




    </>

  )
}
