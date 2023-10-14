import React from "react";
import FooteLogo from "../assets/footer-logo.svg";
import CallIcon from "../assets/hotline-icon.svg";
import Map from './map.jsx'
import {BsFacebook,BsInstagram,BsYoutube} from "react-icons/bs"

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
    { icon: <BsFacebook className="h-6 w-6 text-[#3b5998]"/>, link: "" },
    { icon: <BsInstagram className="h-6 w-6 instagram rounded-lg"/>, link: "" },
    { icon: <BsYoutube className="h-6 w-6 text-[#CD201F] "/>, link: "" },
  ];
  return (
    <div className=" p-14 pb-0  bg-gray-700 px-6">
      <div className="flex gap-20 mb-12">
      <div className="flex w-full justify-between px-8">
        {footerLists.map((item, i) => (
          <div key={i} className="flex flex-col gap-4">
            {item.map((ele, index) => {
              if (ele?.header) {
                return (
                  <div className="text-lg  text-white" key={index}>
                    {ele.header}
                  </div>
                );
              }
              return (
                <div className="text-gray-300" key={index}>
                     {ele.name}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div>
        <Map />
      </div>
      </div>
          
      <div className="flex justify-between py-4 border-b border-gray-100">
        <img src={FooteLogo} alt="FooteLogo" />
        <div className="flex items-center gap-2">
          <img src={CallIcon} className="h-7" alt="" />
          <div>
            <header>To More Inquiry</header>
            <header>
              <a href="tel:+917985936925">+990-737 621 432</a>
            </header>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src={CallIcon} className="h-7" alt="" />
          <div>
            <header>To More Inquiry</header>
            <header>
              <a href="tel:+917985936925">+990-737 621 432</a>
            </header>
          </div>
        </div>
        <header>Advertise With Us</header>
      </div>
      <div className="py-4 flex justify-between">
        <header className="flex flex-row gap-2 items-center">Copyright 2023 <div className="text- text-blue-300">DRIVCO</div> <div className="flex gap-2 items-center">| Design By  <div className="text-blue-300">Egens Lab</div> </div> </header>
        <div className="flex gap-4 items-center">
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
