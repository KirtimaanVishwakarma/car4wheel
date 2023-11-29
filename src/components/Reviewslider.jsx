import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomerReviewCard from './CustomerReviewCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewList } from '../redux/actions/reviewAction.js';
const ReviewSlider = () => {
  const [viewPortWidth, setViewPortWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    function handleResize() {
      setViewPortWidth(window.innerWidth);
    }
  }, []);

  const slidesToShow =
    viewPortWidth < 768
      ? 1
      : viewPortWidth >= 768 && viewPortWidth < 1024
      ? 2
      : 3;
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const dispatch = useDispatch();

  const { reviewList } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(getReviewList(6));
  }, [dispatch]);
    return (
    <Slider {...settings} className="lg:!flex m-auto">
      {reviewList &&
        reviewList?.list?.map((ele, i) => (
          <div key={i} className="p-4">
            <CustomerReviewCard item={ele}/>
          </div>
        ))}
    </Slider>
  );
};

export default ReviewSlider;
