import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomerReviewCard from './CustomerReviewCard.jsx';

const ReviewSlider = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    
      <Slider {...settings} className="flex m-auto">
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
        <div className="p-4">
          <CustomerReviewCard />
        </div>
      </Slider>
   
  );
};

export default ReviewSlider;
