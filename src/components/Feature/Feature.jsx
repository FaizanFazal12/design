import React from 'react'
import Carousel from '../Carosel/Carosel'
import IntegrationCarosel from '../InegrationCarosel/IntegrationCarosel';

export default function Feature() {
  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className={`bg-white flex flex-col border border-slate-300 rounded-2xl`}
    >
      <div
        className="bg-cover h-64" // Adjusted height and width here
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
      <div className='container mx-auto py-52'>
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
          <div className='grid grid-cols-3 gap-10 my-10 w-10/12 mx-auto'>

          {cards}
          </div>
        </div>
      </div>

      <div className='my-20'>
      <div className="hidden whitespace-nowrap bg-slate-100 rounded-xl text-base text-center font-semibold leading-8 mx-auto my-5  text-slate-700 lg:block w-fit px-3">
            Rich Formatting
          </div>
          <div className="text-slate-950 font-extrabold text-4xl my-5 text-center">
            Add style & functionality with
            <br />
            <span>/Slash commands</span>
          </div>
      <IntegrationCarosel/>
      </div>
    </div>


  )
}
