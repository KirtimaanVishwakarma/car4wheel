import { Image } from 'antd';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';

export const CustomerReviewCard = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg h-auto w-auto bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="m-4">
        <figure className="mb-4">
          <Image
            src="https://media.zigcdn.com/media/model/2021/May/v8_360x240.jpg"
            className="rounded-lg borded-solid border-2"
            alt="Shoes"
          />
        </figure>
        <div className="card-body !p-0 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="border border-blue-500 rounded-full flex items-center justify-center">
              <AiOutlineCar className=" text-blue-500" />
            </div>
            <h1 className="font-medium">model name here</h1>
          </div>
          <div>
            Customer review Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="flex card-actions justify-end p-1">
            __customer name
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
