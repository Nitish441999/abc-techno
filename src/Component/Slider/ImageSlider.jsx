import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Slider/style.css'

// Custom Previous Button
const PreviousButton = ({ onClick }) => {
  return (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </button>
  );
};

// Custom Next Button
const NextButton = ({ onClick }) => {
  return (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10"
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </button>
  );
};

// Renaming the custom component to avoid conflicts with the imported Slider
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousButton />,
    nextArrow: <NextButton />,
  };

  return (
    <div className="w-full h-[35rem] max-sm:h-[30rem] relative">
      <Slider {...settings} className="overflow-hidden relative">
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/zyKuyyU.jpeg"
            alt="Slide 1"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white p-4 w-full h-full clip-triangle">
            <h2 className="text-5xl font-bold  w-[40%] mt-[20%] ml-[7%] max-md:text-3xl max-sm:text-xl max-sm:mt-[70%]  ">
              It's easier to be productive when you're clear about what you want to do
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/YAKyH7U.jpeg"
            alt="Slide 2"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white p-4 w-full h-full clip-triangle">
            <h2 className="text-5xl min-sm-text-2xl font-bold  w-[40%] mt-[20%] ml-[7%] max-md:text-3xl max-sm:text-xl max-sm:mt-[70%] ">
              Quality is never an accident it is always the result of intelligent effort.
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/zyKuyyU.jpeg"
            alt="Slide 3"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white p-4 w-full h-full clip-triangle">
            <h2 className="text-5xl font-bold  w-[40%] mt-[20%] ml-[7%] max-md:text-3xl max-sm:text-xl max-sm:mt-[70%] ">
              It's easier to be productive when you're clear about what you want to do
            </h2>
          </div>
        </div>
        <div className="relative">
          <img
            className="w-full h-[35rem] object-cover"
            src="https://i.imgur.com/YAKyH7U.jpeg"
            alt="Slide 4"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 text-white p-4 w-full h-full clip-triangle">
            <h2 className="text-5xl max-md:text-3xl max-sm:text-xl font-bold  w-[40%] mt-[20%] max-sm:mt-[70%] ml-[7%]">
              Quality is never an accident it is always the result of intelligent effort.
            </h2>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
