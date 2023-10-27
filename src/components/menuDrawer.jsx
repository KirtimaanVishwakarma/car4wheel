/* eslint-disable react/prop-types */
import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import CallIcon from "../assets/hotline-icon.svg";
import {CiHome} from "react-icons/ci"
import {PiCarSimpleLight, PiInfoLight} from 'react-icons/pi'
import {CiDiscount1, CiCoins1} from 'react-icons/ci'
// import {PiCurrencyInrThin} from 'react-icons/pi'
import {VscFeedback} from 'react-icons/vsc'
import {TfiComments} from 'react-icons/tfi'
import {LiaUserCircle} from "react-icons/lia"
import { AiOutlineTags } from "react-icons/ai";

const MenuDrawer = ({setIsOpen}) => {
    const navbarMenu = [
        { name: "Home", link: "/", icon: <CiHome /> },
        { name: "ABOUT US", link: "/about",icon: <PiInfoLight/>},
        { name: "CAR LISTING", link: "/car-lists", icon: <PiCarSimpleLight/>  },
        { name: "SPACIAL OFFER", link: "/offers", icon: <CiDiscount1 />  },
        { name: "AUCTION", link: "/auction", icon: <CiCoins1 />  },
        { name: "CUSTOMER REVIEW", link: "/customer-review", icon: <TfiComments />  },
        { name: "CONTACT US", link: "/contact-us", icon: <VscFeedback />  },
      ];
      const { pathname } = useLocation();
    const closeHandler=()=>setIsOpen(false)

  return (
    <div>
        <div className="drawer">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-side z-50">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>


  
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex justify-between">

        <li><Link to={'/'}><img src={Logo} alt="logo" className='mb-8'/></Link></li>

        <div className='flex flex-col gap-6 text-lg font-semibold'>
          {navbarMenu.map((ele, i) => (
            <li key={i} onClick={closeHandler}
              className={
                pathname === ele?.link ? "text-green-10" :'text-black'
              }
            >
              <Link to={ele.link ? ele.link : "#"}>
                <div className='flex items-center gap-4'>
                <div className='text-3xl'>{ele.icon}</div>
                  <h1>{ele.name}</h1>
                </div>
                </Link>
            </li>  
          ))}

  </div>

  <div className='m-auto w-full flex gap-2'>
<li>



          <div className="flex gap-1 items-center border border-green-10">
        <AiOutlineTags className="h-6 w-6"/><span>SELL WITH US</span>
          </div>
</li>
  
<li>
          <div className="flex gap-1 items-center bg-green-10 text-white">
         <LiaUserCircle className="h-6 w-6"/> <span>SING UP</span>
          </div>    
  
        
        </li>
        </div>
          <li className='mt-10'>
              <div className="flex gap-3 text-lg font-semibold ">
          <img src={CallIcon} alt="" />
          <div className="">
            <header>To More Inquiry</header>
            <header>
              <a href="tel:+917985036925">+91 7985036925</a>
            </header>
          </div>
        </div>
          </li>
        </ul>
        </div>

    {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      <li onClick={closeHandler}><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul> */}
   
</div>
    </div>
  )
}

export default MenuDrawer