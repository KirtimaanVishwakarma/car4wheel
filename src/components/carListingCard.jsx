import React from 'react';
import { Image } from 'antd';
import { TbEngine } from 'react-icons/tb';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer2 } from 'react-icons/bs';
import { formatCurrency } from '../utils/apiUtils';
import { Link } from 'react-router-dom';

export const CarListingCard = ({ item }) => {
  const carSpecification = [
    {
      icon: <BsSpeedometer2 className="text-gray-600" />,
      specification: `${item?.odometer} kms`,
    },
    {
      icon: <BiGasPump className="text-gray-600" />,
      specification: item?.fuelType[0],
    },
    {
      icon: <TbEngine className="text-gray-600" />,
      specification: item?.transmission,
    },
  ];
  return (
    <div className="card w-full bg-base-100 shadow-xl m-auto">
      <figure className="px-3  pt-3">
        <Image src={item?.images?.url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          <span className="capitalize">{item?.brand?.name}</span>
          <span className="upperrcase">
            {item?.model}-{item?.modelYear}
          </span>
        </h2>
        <p>₹{formatCurrency(item?.price)}</p>
        <div className="gap-4 flex">
          {carSpecification.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              {item.icon}
              <h2 className="text-gray-500 text-sm">{item.specification} </h2>
            </div>
          ))}
        </div>
        <div className="card-actions items-center justify-between">
          <Link to={`/car-lists/${item?._id}`} className="">
            view more
          </Link>
          <img src={item?.brand?.logo?.url} className="h-8 w-8" alt="" />
        </div>
      </div>
    </div>
  );
};
export default CarListingCard;
