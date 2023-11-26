import { Image } from "antd";
import React from "react";
import { TbEngine } from "react-icons/tb";
import { BiGasPump } from "react-icons/bi";
import { BsSpeedometer2 } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import Button from "./forms/button";
import { formatCurrency } from "../utils/apiUtils";
import { Link } from "react-router-dom";

export const SpecialOfferCard = ({ item }) => {
  const carSpecification = [
    {
      icon: <BsSpeedometer2 className="text-gray-600" />,
      specification: item?.car?.mileage,
    },
    {
      icon: <BiGasPump className="text-gray-600" />,
      specification: item?.car?.fuelType[0],
    },
    {
      icon: <TbEngine className="text-gray-600" />,
      specification: item?.car?.transmission,
    },
  ];
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg w-full bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="m-4">
        <figure className="mb-4">
          <div className="h-56 w-full">
            <Image
              src={item?.car?.images?.url}
              className="rounded-lg  borded-solid border-2 !h-full !w-full !object-contain"
              alt="Shoes"
            />
          </div>
        </figure>
        <div className="card-body flex flex-col gap-4 p-4">
          <div className="flex gap-2 items-center">
            <div className="w-8 h-8 border border-blue-500 rounded-full flex items-center justify-center">
              <SlLocationPin className="h-6 w-6 text-blue-500" />
            </div>
            <h2 className="text-sm font-semibold">Padri Bazar, Gorakhpur</h2>
          </div>

          <div className="font-semibold text-lg">
            <span className="capitalize mr-2"> {item?.car?.brand?.name}</span>
            <span className="uppercase">{item?.car?.model}</span>
          </div>
          <div className="border-b border-t py-3 border-gray-300 gap-4 flex">
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
          <div className="grid grid-flow-col card-actions justify-between">
            <Link
              to={`/car-lists/${item?.car?._id}`}
              className="text-blue-b1 hover:underline"
            >
              view more
            </Link>
            <div className="ps-2">
              <h2 className="font-bold text-lg">
                ₹{formatCurrency(item?.specialOfferPrice)}
              </h2>
              <h3 className="text-sm text-gray-500 line-through">
                ₹{formatCurrency(item?.car?.price)}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialOfferCard;
