import { Image } from 'antd';
import React from 'react';
import { AiOutlineCar } from 'react-icons/ai';
import { useLocation } from 'react-router';

export const CustomerReviewCard = ({item}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg h-auto w-auto bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="m-4">
        <figure className="mb-4">
          <Image
            src={item?.image?.url} width='100%'
            className="rounded-lg borded-solid border-2 !h-44 !object-cover"
            alt="review"
          />
        </figure>
        <div className="card-body !p-0 flex flex-col gap-2">
          <div className="flex gap-2 items-center">
            <div className="border border-blue-500 rounded-full flex items-center justify-center">
              <AiOutlineCar className=" text-blue-500" />
            </div>
            <h1 className="font-medium"><span className='capitalize'>{item?.brand}</span> - <span className='uppercase'>{item?.model}</span></h1>
          </div>
          <div className={currentPath==='/' && 'truncate'}>
            {item?.review}
          </div>
          <div className="flex card-actions justify-end p-1">
            __{item?.customerName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
