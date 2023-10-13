import React from "react";
import FooteLogo from "../assets/footer-logo.svg";
import CallIcon from "../assets/hotline-icon.svg";

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
    { img: "facebook", link: "" },
    { img: "insta", link: "" },
    { img: "linkdin", link: "" },
  ];
  return (
    <div className="bg-gray-700 px-6">
      <div className="flex justify-between">
        {footerLists.map((item, i) => (
          <div key={i}>
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
      <div>
        <header>Copyright 2023 DRIVCO | Design By Egens Lab</header>
        <div>
          <header>Follow Drivco:</header>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
