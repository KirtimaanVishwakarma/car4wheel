import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {RiAuctionLine, RiContactsLine} from 'react-icons/ri'
import {CiDiscount1} from 'react-icons/ci'


export const QuickLinksHome = () => {
    const quickLinks=[{
        link: 'Browse Used a Car',
        icon: <AiOutlineFileSearch className='text-3xl'/>,
        href: "/car-lists"
    },
    {
        link: 'Auction Car',
        icon: <RiAuctionLine className='text-3xl'/>,
        href: "/auction"
    },
    {
        link: 'Browse Offer',
        icon: <CiDiscount1 className='text-3xl'/>,
        href: "/offers"
    },
    {
        link: 'Get In Touch',
        icon: <RiContactsLine className='text-3xl'/>,
        href: "/contact-us"
    }]
  return (
    <div className='flex items-center justify-between p-8 bg-black text-white '>
        {quickLinks.map((item,i)=>(
            
        <Link key={i} to={item.href} className='flex gap-4 w-full justify-center border-r last:border-none last:justify-end first:justify-start p-3' >{item.icon}<span>{item.link}</span></Link>
        
        ))}
    </div>
  )
}
export default QuickLinksHome;
