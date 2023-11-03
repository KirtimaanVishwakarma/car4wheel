import React from 'react';

export const AboutCard = () => {
  return (
    <div className='w-full h-full p-8 py-10 border-solid border-2 rounded-lg flex flex-col'>
      <div className='flex justify-start gap-6 mb-3'> 
        <img
          src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/affordable.svg"
          alt="AboutCardImg"
        />
        <div className='flex gap-2 items-center font-bold text-2xl'>
          <span className='text-blue-400'>Affordable</span> <span> Price</span>
        </div>
      </div>
    
      <div className='text-gray-500 font-light'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
          repellat accusamus modi suscipit debitis autem laboriosam ratione
          aliquam illo iusto?
        </div>
      </div>

  );
};
export default AboutCard;