import React, { useEffect } from 'react'
import HeroSection from '../components/heroSection';
import CustomerReviewCard from '../components/CustomerReviewCard';
import Main from '../utils/main';

const CustomerReview = () => {
  useEffect(()=>{window.scrollTo(0, 0)},[])
  return (
    <Main>
    <HeroSection/>
    <div className='lg:mx-14 my-20 mx-4'>
    <div className='grid lg:grid-cols-3 gap-6'>
      {[1,2,3,4,5,6,7,8,9].map((ele)=>(
    
<CustomerReviewCard key={ele}/>
    
      ))}
    </div>
    </div>

    </Main>
  )
}

export default CustomerReview;