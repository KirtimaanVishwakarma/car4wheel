import React,{useState, useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomerReviewCard from './CustomerReviewCard.jsx';

const ReviewSlider = () => {
  const[viewPortWidth, setViewPortWidth]=useState(window.innerWidth);
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize)
      }
      function handleResize(){
    setViewPortWidth(window.innerWidth)
    }
  },[]);
  
const slidesToShow= viewPortWidth<768? 1 : viewPortWidth>=768 && viewPortWidth<1024? 2 : 3 
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
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
