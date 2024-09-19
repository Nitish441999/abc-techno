import React, { useEffect, useState } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    id: 1,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'John Doe',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
  },
  {
    id: 2,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Jane Smith',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
  },
  {
    id: 3,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Emily Clark',
    rating: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
  },
  {
    id: 4,
    image: 'https://i.imgur.com/zyKuyyU.jpeg',
    name: 'Michael Brown',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1); // Default to 1 for mobile

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      // Check the screen width and set itemsPerPage accordingly
      setItemsPerPage(window.innerWidth >= 1024 ? 2 : 1);
    };

    // Set the initial value based on the screen size
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - itemsPerPage));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - itemsPerPage ? prevIndex + 1 : 0));
  };

  return (
    <div className="relative p-4 w-[90%] mx-auto mt-10">
      <div className="flex justify-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-1 relative">Testimonial</h2>
          <div className="relative w-full rounded-md h-2 bg-blue-700 overflow-hidden">
            <span className="absolute bg-orange-400 w-full h-full animate-slide"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mx-auto lg:justify-between lg:gap-4">
        {testimonials
          .slice(currentIndex, currentIndex + itemsPerPage)
          .map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-1 bg-gradient-to-r to-orange-400 from-blue-700 shadow-sm shadow-gray-700 rounded p-4 mb-4 lg:mb-0"
              data-aos="zoom-in-up"
              data-aos-duration="1200"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p className="font-bold text-xl text-gray-900">{testimonial.name}</p>
                  <p className="text-yellow-300">{'★'.repeat(testimonial.rating)}</p>
                </div>
              </div>
              <p className="text-center mb-4 text-gray-100">{testimonial.text}</p>
            </div>
          ))}
      </div>
      {/* Prev and Next Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 transform -translate-y-2/2 px-4 py-2 my-3 bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        Previous
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 transform -translate-y-2/2 px-4 py-2 my-3 bg-[#1d4ed8] text-white rounded hover:bg-blue-800"
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        Next
      </button>
    </div>
  );
};

export default Testimonial;
