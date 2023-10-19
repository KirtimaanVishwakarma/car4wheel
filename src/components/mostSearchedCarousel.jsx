import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarListingCard from './carListingCard.jsx'
import {MdArrowForwardIos} from 'react-icons/md'

const MostSearchedCarousel = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, autoplaySpeed: 2000
  };

  const CustomPrevArrow = (props) => (
    <button
      {...props}
      className="slick-arrow custom-prev-arrow"
    >
      <MdArrowForwardIos className="border-solid border-2 border-black h-10 w-10 p-2 rounded-full text-green-10 rotate-180"/>
    </button>
  );

  const CustomNextArrow = (props) => (
    <button
      {...props}
      className="slick-arrow custom-next-arrow"
    >
      <MdArrowForwardIos className="border-solid border-2 border-black h-10 w-10 p-2 rounded-full text-green-10"/>
    </button>
  );

  return (
    <div className="w-full">
      <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow className=""/>} className="flex">
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
        <div className="p-4">
          <CarListingCard />
        </div>
      </Slider>
    </div>
  );
};

export default MostSearchedCarousel;
