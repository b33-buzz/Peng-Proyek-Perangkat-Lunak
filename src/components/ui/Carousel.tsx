"use client";

import { useState } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    { image: "/path/to/image1.jpg", bgColor: "bg-red-500" },
    { image: "/path/to/image2.jpg", bgColor: "bg-blue-500" },
    { image: "/path/to/image3.jpg", bgColor: "bg-green-500" },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-[700px] h-[700px] border border-gray-400 rounded-lg overflow-hidden">
      <div className={`w-full h-full ${slides[currentIndex].bgColor}`}>
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className="w-full h-full object-cover"
        />
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white border border-gray-400 rounded-full w-8 h-8 flex items-center justify-center"
      >
        &gt;
      </button>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
