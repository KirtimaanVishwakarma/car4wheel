import React from 'react'
import { Link } from 'react-router-dom';
import {AiOutlineFileSearch} from 'react-icons/ai'
import {RiAuctionLine, RiContactsLine} from 'react-icons/ri'
import {CiDiscount1} from 'react-icons/ci'


export const QuickLinksHome = () => {
    const quickLinks=[{
        link: 'Browse Used Car',
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
    <div className='lg:flex items-center justify-between py-4 lg:p-8 bg-blue-500 text-white-0 '>
        {quickLinks.map((item,i)=>(
            
        <Link key={i} data-tip={item.link} to={item.href} className='flex items-center gap-4 w-full lg:justify-center lg:border-r lg:last:border-none lg:last:justify-end lg:first:justify-start  p-3 text-base font-semibold '>{item.icon}<span>{item.link}</span></Link>
        
        ))}
    </div>
  )
}
export default QuickLinksHome;
