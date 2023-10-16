import { Image } from 'antd';
import React from 'react';
import { TbEngine } from 'react-icons/tb';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { SlLocationPin } from 'react-icons/sl';

export const SpecialOfferCard = () => {
  const carSpecification = [
    {
      icon: <BsSpeedometer2 className="text-gray-600" />,
      specification: '2500 miles',
    },
    {
      icon: <BiGasPump className="text-gray-600" />,
      specification: 'Petrol+Gas',
    },
    {
      icon: <TbEngine className="text-gray-600" />,
      specification: 'Electric',
    },
  ];
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg w-full  bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="m-4">
        <figure className="mb-4">
          <Image
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/product-sb-img-04.png"
            className="rounded-lg  borded-solid border-2 "
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 border border-blue-500 rounded-full flex items-center justify-center">
              <SlLocationPin className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-sm font-semibold">Padri Bazar, Gorakhpur</h2>
          </div>
          <h1 className='font-bold text-lg'>Mercedes-Benz C-Class-2023</h1>
          <div className="gap-4 flex">
            {carSpecification.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                {item.icon}
                <h2 className="text-gray-500 text-sm">{item.specification} </h2>
              </div>
            ))}

            {/* <div>
            <BiGasPump />
            <h2>Petrol + Gas</h2>
         </div>
         <div>
            <TbEngine/>
            <h2>Electric</h2>
      </div> */}
          </div>
          <div className="flex card-actions justify-between">
            <button className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white">
              View Details
            </button>
            <div className="ps-2">
              <h2 className="font-bold text-lg">₹5000000</h2>
              <h3 className="text-sm text-gray-500 line-through">₹6000000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialOfferCard;
