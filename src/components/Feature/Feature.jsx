import React from 'react'
import Carousel from '../Carosel/Carosel'
import IntegrationCarosel from '../InegrationCarosel/IntegrationCarosel';

export default function Feature() {
  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className={`bg-white flex flex-col border border-slate-300 rounded-2xl mx-5 md:max-w-[330px] my-4`}
    >
      <div
         className="bg-contain bg-no-repeat  h-[300px]  md:h-64  rounded-t-2xl" // Adjusted height and width here
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/w8fc6tgspyjz/2QpqMfhC7xuCQfR7kVn8gs/52229971b42c1f429e2359d9ceed7bc1/docs30_06-advanced.png?fm=avif&q=50')",
        }}
      >
        {/* Background Image */}
      </div>
      <div className="mx-7">
        <h2 className="text-xl font-bold text-slate-950 mb-2">Focus Mode</h2>
        <p className="text-gray-600 text-base font-semibold mb-4">
          Easily access doc templates to start drafting right away. Save frequently used documents as templates for quick access later.
        </p>
      </div>
    </div>
  ));

  return (
    <div className=' bg-slate-50'>
      <div className='container mx-auto pt-52'>
        <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-2">
          Organize
        </div>
        <div className="text-slate-950 font-extrabold text-4xl my-5 text-center">
          Get more done with time-saving
          <br />
          <span>features</span>
        </div>

        <div className="font-medium text-lg text-center mt-5 mb-10">
          Write distraction-free with Focus Mode, save templates for later, and keep track of your doc
          <br />
          <span>details.</span>
        </div>
        <Carousel />


        {/* second Fetures */}

        <div className='my-20'>

          <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-3">
            Rich Formatting
          </div>
          <div className="text-slate-950 font-extrabold text-4xl my-5 text-center">
            Add style & functionality with
            <br />
            <span>/Slash commands</span>
          </div>
          <div className='md:grid md:grid-cols-3 md:my-10 w-10/12 mx-auto'>

            {cards}
          </div>
        </div>
      </div>

      <div className='my-24'>
        <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-3">
          Integrations
        </div>
        <div className="text-slate-950 font-extrabold text-5xl my-5 text-center">
          Connect your favorite tools with
          <br />
          <span>ClickUp.</span>
        </div>
        <IntegrationCarosel />
      </div>


    </div>


  )
}
