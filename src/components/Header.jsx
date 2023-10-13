import React from "react";
import Logo from "../assets/logo.svg";
import CallIcon from "../assets/hotline-icon.svg";
import { useLocation } from "react-router-dom";
const Header = () => {
  const navbarMenu = [
    { name: "Home", link: "/" },
    { name: "ABOUT US", link: "/about" },
    { name: "CAR LISTING", link: "/car-lists" },
    { name: "SPACIAL OFFER", link: "/offers" },
    { name: "AUCTION", link: "/auction" },
    { name: "CUSTOMER REVIEW", link: "/customer-review" },
    { name: "CONTACT US", link: "/contact-us" },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <div className="flex justify-between px-8 py-4 border-b border-gray-200">
        <img src={Logo} alt="logo" />
        <div className="relative w-2/5 h-12">
          <input
            type="search"
            className=" p-2.5 w-full h-full text-sm rounded-lg outline-none border border-gray-300 dark:placeholder-gray-400"
            placeholder="Search for city or address"
            required
          />
          <button
            type="submit"
            className="absolute top-0 right-0 h-full  px-4 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <span>SELL WITH US</span>
          <span>SAVE</span>
          <span>SING UP</span>
        </div>
      </div>
      <div className="flex justify-between p-3 px-6 border-b border-gray-200">
        <ul className="flex items-center gap-4">
          {navbarMenu.map((ele, i) => (
            <li
              key={i}
              className={`h-full relative flex items-center px-4 ${
                pathname === ele?.link && "custom-underline"
              }`}
            >
              <a href={ele.link ? ele.link : "#"}>{ele.name}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          <img src={CallIcon} alt="" />
          <div className="">
            <header>To More Inquiry</header>
            <header>
              <a href="tel:+917985036925">+91 7985036925</a>
            </header>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
