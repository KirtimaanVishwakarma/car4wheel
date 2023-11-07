import React, { useEffect } from 'react';
import HeroSection from '../components/heroSection';
import CustomerReviewCard from '../components/CustomerReviewCard';
import Main from '../utils/main';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewList } from '../redux/actions/reviewAction';
import Loader from '../assets/loader/loader';

const CustomerReview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch();
  const { loading, reviewList } = useSelector((state) => state.review);
  useEffect(() => {
    dispatch(getReviewList(10));
  }, [dispatch]);
  if(loading){
    return(
<Loader/>
    )
  }
  return (
    <Main>
      <HeroSection />
      <div className="lg:mx-14 my-20 mx-4">
        <div className="grid lg:grid-cols-3 gap-6">
          {reviewList &&
            reviewList?.list?.map((ele) => (
              <CustomerReviewCard  item={ele} />
            ))}
        </div>
      </div>
    </Main>
  );
};

export default CustomerReview;
