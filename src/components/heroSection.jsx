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
    <div className="ps-4 lg:px-14  bg-white bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="lg:py-14 pb-8 pt-4">
        <BreadCrumb items={items} className='' />

        <div className="flex items-center h-full justify-between ">
          <div className="w-full flex flex-col  lg:gap-2  ">
            <header className="lg:text-xl text-lg text-blue-500 tracking-[4px]">
              Contact Us
            </header>
            <header className="text-xl lg:text-6xl font-bold tracking-[2px]">
              For Any Information
            </header>
            <div className="flex">
              <header>rating</header>
              <header>rating 2</header>
            </div>
          </div>
          <div className="hidden lg:w-full lg:block">
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
