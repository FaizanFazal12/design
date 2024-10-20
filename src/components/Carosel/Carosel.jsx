"use client";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css"; // Import Carousel CSS for styling

export default function CarouselCustomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active slide


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, // Show 3 items fully
      slidesToSlide: 1, // Slide one item at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2, // Adjust to 2 items on tablets
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Only 1 item on mobile
      slidesToSlide: 1,
    },
  };

  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className={`relative transition-opacity duration-500 group   bg-white flex flex-col border border-slate-300 rounded-2xl mx-4 md:max-w-[350px] my-4`} 
    >
      <div
    className="bg-contain bg-no-repeat  h-[300px]  md:h-64  rounded-t-2xl relative"
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/w8fc6tgspyjz/2QpqMfhC7xuCQfR7kVn8gs/52229971b42c1f429e2359d9ceed7bc1/docs30_06-advanced.png?fm=avif&q=50')",
        }}
      >
        {/* Learn More Button */}
        <div className={`absolute bottom-4 right-4 hidden whitespace-nowrap bg-slate-100 rounded-xl text-[14px] text-center font-semibold leading-8 text-slate-700 lg:inline-flex items-center opacity-0 group-hover:opacity-100 w-fit mx-4 px-2`}>
        Learn More
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1 h-4 w-4 text-slate-700" // Add margin left to separate text and icon
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" />
        </svg>
      </div>
      </div>
      <div className="mx-7">
        <h2 className="text-xl font-bold text-slate-950 mb-2">Focus Mode</h2>
        <p className="text-gray-600 text-base font-semibold mb-4">
          Easily access doc templates to start drafting right away. Save frequently used documents as templates for quick access later.
        </p>
      </div>
    </div>
  ));
  

  const handleBeforeChange = (nextSlide) => {
    setActiveIndex(nextSlide);
  };

  return (
    <div className="w-10/12 mx-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        responsive={responsive}
        infinite={true}
        showDots={true}
        focusOnSelect={true}
        autoPlaySpeed={500}
        keyBoardControl={true}
        customTransition="transform 0.5s ease-in-out"
        transitionDuration={500}
        beforeChange={handleBeforeChange}
        containerClass="carousel-container gap-10"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {cards}
      </Carousel>
    </div>
  );
}
