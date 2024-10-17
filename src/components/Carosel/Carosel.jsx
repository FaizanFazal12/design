"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import Carousel CSS for styling

export default function CarouselCustomNavigation() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // 1 slide at a time
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cards = Array.from({ length: 10 }).map((_, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center"
    >
      <h2 className="text-xl font-semibold mb-2">Card {index + 1}</h2>
      <p className="text-gray-600 mb-4">
        This is some content for card {index + 1}. Add your text here.
      </p>
      <button className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
  ));

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all 2"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {cards}
    </Carousel>
  );
}
