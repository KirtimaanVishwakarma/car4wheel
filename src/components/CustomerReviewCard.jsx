import { Image } from 'antd';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';

export const CustomerReviewCard = () => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg w-auto h-auto bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="m-4">
        <figure className="mb-4">
          <Image
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            className="rounded-lg borded-solid border-2"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex flex-col gap-4">
          <div className="flex gap-2 items-center">
            <div className="border border-blue-500 rounded-full flex items-center justify-center">
              <AiOutlineCar className=" text-blue-500" />
            </div>
            <h1 className="font-medium">model name here</h1>
          </div>
          <div>
            Customer review Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum est consectetur quibusdam. Voluptatibus dicta quibusdam incidunt excepturi vitae possimus blanditiis?
          </div>
          <div className="flex card-actions justify-end p-4">
            __customer name
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
