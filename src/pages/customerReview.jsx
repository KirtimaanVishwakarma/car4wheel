import React from 'react'
import HeroSection from '../components/heroSection';
import CustomerReviewCard from '../components/CustomerReviewCard';

const CustomerReview = () => {
  return (
    <>
    <HeroSection/>
    <div className='mx-14 my-20'>
    <div className='grid grid-cols-3 gap-4'>
      {[1,2,3,4,5,6,7,8,9].map((ele)=>(
    
<CustomerReviewCard key={ele}/>
    
      ))}
    </div>
    </div>

    </>
  )
}

export default CustomerReview;