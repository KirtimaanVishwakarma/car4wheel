/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import CallIcon from '../assets/hotline-icon.svg';
import { CiHome } from 'react-icons/ci';
import { PiCarSimpleLight, PiInfoLight } from 'react-icons/pi';
import { CiDiscount1, CiCoins1 } from 'react-icons/ci';
// import {PiCurrencyInrThin} from 'react-icons/pi'
import { VscFeedback } from 'react-icons/vsc';
import { TfiComments } from 'react-icons/tfi';
import { LiaUserCircle } from 'react-icons/lia';
import { AiOutlineTags } from 'react-icons/ai';
import { Drawer } from 'antd';
import { IoCloseOutline } from 'react-icons/io5';

const MenuDrawer = ({ setOpen, open }) => {
  const navbarMenu = [
    { name: 'Home', link: '/', icon: <CiHome /> },
    { name: 'ABOUT US', link: '/about', icon: <PiInfoLight /> },
    { name: 'CAR LISTING', link: '/car-lists', icon: <PiCarSimpleLight /> },
    { name: 'SPACIAL OFFER', link: '/offers', icon: <CiDiscount1 /> },
    { name: 'AUCTION', link: '/auction', icon: <CiCoins1 /> },
    {
      name: 'CUSTOMER REVIEW',
      link: '/customer-review',
      icon: <TfiComments className="h-6" />,
    },
    {
      name: 'CONTACT US',
      link: '/contact-us',
      icon: <VscFeedback className="h-7" />,
    },
  ];
  const { pathname } = useLocation();

  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Drawer
        width={350}
        placement="left"
        onClose={onClose}
        closable={false}
        open={open}
        title={
          <div className="flex justify-between">
            <Link to={'/'} onClick={onClose}>
              <img src={Logo} alt="logo" className="my-3" />
            </Link>

            <IoCloseOutline className="h-7 w-7" onClick={onClose} />
          </div>
        }
        footer={
          <a
            href="tel:+917985036925"
            className="flex gap-3 text-lg font-semibold justify-center"
          >
            <img src={CallIcon} alt="" />
            <div>
              <header className="text-base font-normal">To More Inquiry</header>
              <header>+91 7985036925</header>
            </div>
          </a>
        }
      >
        <div className="flex justify-around flex-col h-full">
          <ul className="flex flex-col h-3/4 justify-evenly">
            {navbarMenu.map((ele, i) => (
              <li
                key={i}
                onClick={onClose}
                className={
                  pathname === ele?.link ? 'text-green-g1' : 'text-black'
                }
              >
                <Link to={ele.link ? ele.link : '#'}>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">{ele.icon}</div>
                    <h1>{ele.name}</h1>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center gap-3">
            <div className="flex-1 flex gap-1 items-center border border-green-g1  px-3 py-2 rounded justify-center">
              <AiOutlineTags className="h-6 w-6" />
              <span className="whitespace-nowrap">SELL WITH US</span>
            </div>
            <div className="flex-1 flex gap-1 items-center bg-green-g1 text-white px-3 py-2 rounded justify-center">
              <LiaUserCircle className="h-6 w-6" />{' '}
              <span className="whitespace-nowrap">SING UP</span>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
