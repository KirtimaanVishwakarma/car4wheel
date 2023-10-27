import React from 'react'
import { Image } from 'antd';
import { TbEngine } from 'react-icons/tb';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer2 } from 'react-icons/bs';

export const CarListingCard = () => {
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
    <div className="card w-full bg-base-100 shadow-xl m-auto">
  <figure className="px-3  pt-3">
    <Image src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/product-sb-img-01.png" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Mercedes-Benz C-Class-2023</h2>
    <p>$7,656.00</p>
    <div className="gap-4 flex">
            {carSpecification.map((item, index) => (
              <div key={index} className="flex items-center gap-1">
                {item.icon}
                <h2 className="text-gray-500 text-sm">{item.specification} </h2>
              </div>
            ))}
          </div>
    <div className="card-actions items-center justify-between">
      <h1 className="">view more</h1>
      <img src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/mercedes-01.svg" className="h-8 w-8" alt="" />
    </div>
  </div>
</div>
  )
}
export default CarListingCard;