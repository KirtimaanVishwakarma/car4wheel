import React from 'react';
import BreadCrumb from '../components/breadcrumb';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const HeroSection = () => {
  const items = [
    {
      href: '',
      title: (
        <>
          <HomeOutlined />
          <span>Home</span>
        </>
      ),
    },
    {
      href: '',
      title: (
        <>
          <UserOutlined />
          <span>Contact Us</span>
        </>
      ),
    },
  ];
  return (
    <div className="px-14  bg-white bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="py-14">
        <BreadCrumb items={items} />

        <div className="flex items-center h-full justify-between ">
          <div className="w-full flex flex-col gap-2">
            <header className="text-xl text-blue-500 tracking-[4px]">
              Contact Us
            </header>
            <header className=" text-6xl font-bold tracking-[2px]">
              For Any Information
            </header>
            <div className="flex">
              <header>rating</header>
              <header>rating 2</header>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-banner-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
