import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  // Move to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center overflow-hidden">
      {/* Left Arrow */}
      <button
        className="absolute focus:outline-none left-5 p-2 text-gray-200 bg-gray-800 hover:text-yellow-600 hover:border-yellow-600 hover:border-white transition duration-300 rounded-full z-10"
        onClick={prevSlide}
      >
        &#9664;
      </button>

      {/* Carousel Items */}
      <div className="w-full flex justify-center overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`min-w-full flex justify-center items-center transition-transform duration-500 
                ${index === currentIndex ? 'scale-110 hover:scale-115' : 'scale-90'} 
                rounded-lg overflow-hidden`} // Added border radius
            >
              <div className="p-6 bg-gray-900 rounded-lg shadow-lg">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Arrow */}
      <button
        className="absolute focus:outline-none right-5 p-2 text-gray-200 bg-gray-900 hover:text-yellow-600 hover:border-yellow-600 rounded-full z-10"
        onClick={nextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
