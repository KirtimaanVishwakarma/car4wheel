import React  from "react";
import FooteLogo from "../assets/footer-logo.svg";
import CallIcon from "../assets/hotline-icon.svg";
import Map from './map.jsx'
import {BsFacebook,BsInstagram} from "react-icons/bs"
import {PiYoutubeLogoLight} from "react-icons/pi"
import {PiAtThin} from 'react-icons/pi'
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLists = [
    [
      {
        header: "About Company",
      },
      { name: "About Us", link: "/about-us" },
      { name: "Return & Exchange", link: "/about-us" },
      { name: "Refund Policy", link: "/about-us" },
      { name: "Reviews", link: "/about-us" },
      { name: "FAQ’s", link: "/about-us" },
      { name: "Contact Us", link: "/contact-us" },
    ],
    [
      {
        header: "Search & Explore",
      },
      { name: "Car Listing", link: "/about-us" },
      { name: "New Arrives", link: "/about-us" },
      { name: "Auction Cars", link: "/about-us" },
      { name: "Sell My Car", link: "/about-us" },
      { name: "Shop Now", link: "/about-us" },
    ],
    [
      {
        header: "Car By Brands",
      },
      { name: "Toyota", link: "/about-us" },
      { name: "Suzuki", link: "/about-us" },
      { name: "Hyundai", link: "/about-us" },
      { name: "Mahindra", link: "/about-us" },
      { name: "Tata", link: "/about-us" },
    ],
    

  ];
  const socailLinks = [
    { icon: <BsFacebook className="h-[80%] lg:h-6 lg:w-6"/>, link: "" },
    { icon: <BsInstagram className="h-[80%] lg:h-6 lg:w-6 instagram rounded-lg"/>, link: "" },
    { icon: <PiYoutubeLogoLight className="h-[80%] w-full lg:h-6 lg:w-6 rounded-lg border-solid border border-blue-200 bg-red-700 overflow-none"/>, link: "" },
  ]
  return (
    <div className="bg-blue-500 py-14 pb-0 lg:px-6 p-3 ">
      <div className="flex lg:flex-row gap-10 flex-col lg:h-full items-center  lg:gap-20 mb-12">
      <div className="flex w-full ps-5 lg:justify-between gap-12 lg:text-start">
        {footerLists.map((item, i) => (
          <div key={i} className=" flex flex-col gap-4">
            {item.map((ele, index) => {
              if (ele?.header) {
                return (
                  <div className="text-lg  text-white-0 font-bold" key={index}>
                    {ele.header}
                  </div>
                );
              }
              return (
                <Link to={ele.link} className="text-blue-200 cursor-pointer" key={index}>
                     {ele.name}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
      <div>
        <Map />
      </div>
      </div>
          
      <div className="flex lg:flex-row flex-col gap-4 lg:px-0 px-10 items-center lg:justify-between py-4 border-b border-gray-100">
        <img src={FooteLogo} alt="FooteLogo" />
        <div className="flex items-center gap-2">
          <img src={CallIcon} className="h-10 filter-invert" alt="" />
          <div>
            <header className="text-blue-200 text-sm font-semibold">To More Inquiry</header>
            <header>
              <a href="tel:+917985936925" className="font-semibold text-xl">+990-737 621 432</a>
            </header>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <PiAtThin className="h-12  w-12"/>
          <div>
            <header className="text-blue-200 text-sm font-semibold">To Send Email</header>
            <header className="font-semibold text-xl">
              <a href="">abc@example.com</a>
            </header>
          </div>
        </div>
        <header className="text-sm font-semibold text-blue-200">Advertise With Us</header>
      </div>
      <div className="py-4 flex lg:flex-row flex-col gap-3 items-center lg:justify-between">
        <header className="flex flex-row gap-2 items-center">Copyright 2023 <div className="text- text-blue-200">DRIVCO</div> <div className="flex gap-2 items-center">| Design By  <div className="text-blue-200">Egens Lab</div> </div> </header>
        <div className="flex lg:gap-4 gap-6 items-center text-blue-200">
          <header>Follow Drivco:</header>
          
          {socailLinks.map((ele,i)=>(
            <div key={i} className="overflow-hidden">{ele?.icon}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
