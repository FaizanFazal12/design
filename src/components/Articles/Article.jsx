import React from 'react'

export default function Article() {
  const cards = Array.from({ length: 3 }).map((_, index) => (
    <div
      key={index}
      className={`bg-white flex flex-col border border-slate-300 rounded-2xl mx-5 md:max-w-[330px] my-4 md:my-0`}
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
        <h3 className='font-bold text-base text-slate-900 '> Lesley Messer        </h3>
        <p className="text-gray-700 text-base font-semibold mb-4">
        Head of Editorial at ClickUp
        </p>
      </div>
    </div>
  ));
  return (
    <div className='container mx-auto'>
         <div className='my-24'>
        <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-3">
        From our Blog
        </div>
        <div className="text-slate-950 font-extrabold text-5xl my-5 text-center">
        Related Articles
       
        </div>
      </div>
      <div className='md:flex justify-center items-center'>

{cards}
      </div>

    </div>
  )
}
