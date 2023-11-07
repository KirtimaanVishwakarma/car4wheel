import React,{ useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarListingCard from './carListingCard.jsx'
import {MdArrowForwardIos} from 'react-icons/md'


const MostSearchedCarousel = ({item}) => {
  let [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
    let handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Add an event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
let slidesToShow =
  viewportWidth < 768 ? 1 :
  viewportWidth >= 768 && viewportWidth < 1024 ? 2 :
  3;

  let slideSpeed= viewportWidth < 768 ? 500:400
  let AutoplaySpeed= viewportWidth < 768 ? 3000:2000

  let settings = {
    // dots: true,
    infinite: true,
    speed: slideSpeed,
    slidesToShow:slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: AutoplaySpeed,
    arrows: false
  };

  const CustomPrevArrow = (props) => {
    if (viewportWidth >= 768) {
      return (
        <button {...props} className="slick-arrow custom-prev-arrow">
          <MdArrowForwardIos className="border-solid border-2 border-black h-10 w-10 p-2 rounded-full text-green-g1 rotate-180" />
        </button>
      );
    }
    return null;
  };

  const CustomNextArrow = (props) => {
    if (viewportWidth >= 768) {
      return (
        <button {...props} className="slick-arrow custom-next-arrow">
          <MdArrowForwardIos className="border-solid border-2 border-black h-10 w-10 p-2 rounded-full text-green-g1" />
        </button>
      );
    }
    return null;
  };
  return (
    <div className="lg:my-4 lg:flex-row lg:w-full">
      <Slider {...settings} prevArrow={<CustomPrevArrow />} nextArrow={<CustomNextArrow />} className='flex justify-between'>
       
       {item?.map(ele=>
        <div key={ele._id} className="lg:p-4 p-2">
          <CarListingCard item={ele}/>
        </div>)}
      </Slider>
    </div>
  );
};

export default MostSearchedCarousel;
