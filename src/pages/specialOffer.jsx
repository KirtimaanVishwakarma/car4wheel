import React from 'react';
import HeroSection from '../components/heroSection';
import SpecialOfferCard from '../components/specialOfferCard';
import OfferForm from '../components/offerForm';
import { Button } from 'antd';

const SpecialOffer = () => {
  const filterForm = [
    {
      header: 'Brand',
      placeholder: 'Select Brand',
      options: ['Maruti', 'Tata'],
    },
    {
      header: 'Model',
      placeholder: 'Select Modal',
      options: ['Baleno', 'breeza'],
    },
    {
      header: 'Engine',
      placeholder: 'Enter Engine Type',
      options: ['1500cc', '1800cc', '2500cc'],
    },
  ];
  return (
    <>
      <div className="relative">
        <HeroSection />

        <div className="border w-[90%]  right-5 rounded-2xl p-5 absolute lg:w-[95%] top-[90%] lg:top-[82%] lg:left-8 bg-white">
          <div className="h-full lg:flex gap-4 justify-between w-full">
            {filterForm.map((ele, i) => (
              <div key={i} className="flex-1">
                <OfferForm
                  header={ele.header}
                  placeholder={ele.placeholder}
                  options={ele.options}
                />
              </div>
            ))}
            <div className="w-full flex-1  flex justify-center items-center">
              <Button
                type="primary"
                htmlType="submit"
                className=" w-full  h-12 mt-2 font-bold text-lg tracking-wider bg-blue-600"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="block mt-[28rem] mb-10 lg:my-[11rem] mx-4  lg:mx-14">
        <h1 className="ps-4 mb-4 mt-4 text-gray-500">
          Showing 2,928 car available in stock
        </h1>
        <div className="grid lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((ele) => (
            <SpecialOfferCard key={ele} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SpecialOffer;
