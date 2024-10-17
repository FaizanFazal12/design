"use client";
import { useRef } from "react";

export default function Carousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({
      left: -295, // Adjust scrolling amount to match card size
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({
      left: 295,
      behavior: "smooth",
    });
  };

  return (

    <div className="flex items-center justify-center container mx-auto">
      <div className="relative w-full max-w-4xl overflow-hidden">
        {/* Left Arrow */}
        <button
          className="absolute left-0 z-10 p-2 bg-white shadow rounded-full -translate-y-1/2 top-1/2"
          onClick={scrollLeft}
        >
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
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Carousel Content */}
        <div
          ref={carouselRef}
          className="flex flex-1 overflow-x-scroll scroll-smooth space-x-6 px-4 scrollbar-hide"
        >
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="min-w-[270px]  bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
              <p className="text-gray-600">
                This is some sample text for card {index + 1}. Add any content here.
              </p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-5 z-10 p-2 bg-white shadow rounded-full -translate-y-1/2 top-1/2"
          onClick={scrollRight}
        >
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
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>

  );
}
