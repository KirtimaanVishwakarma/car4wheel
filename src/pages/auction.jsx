import React from 'react'
import HeroSection from '../components/heroSection';
import { Image } from 'antd';
import { TbEngine } from 'react-icons/tb';
import { BiGasPump } from 'react-icons/bi';
import { BsSpeedometer2 } from 'react-icons/bs';
import {MdOutlineCarCrash} from 'react-icons/md'
import {PiCheckCircleThin} from 'react-icons/pi'


const Auction = () => {
  const carInfo=[{
    img: <BsSpeedometer2 className='w-8 h-8  mb-4 font-thin text-gray-400'/>,
    header: '25,100 miles',
    subheader: 'Mileage'
  },
  {
    img: <TbEngine className='w-8 h-8 mb-4 font-thin text-gray-400'/>,
    header: '22,231 cc',
    subheader: 'Engine'
  },
  {
    img: <BiGasPump className='w-8 h-8 mb-4 font-thin text-gray-400' />,
    header: 'Petrol + Gas',
    subheader: 'Fuel Type'
  },
  {
    img: <MdOutlineCarCrash className='w-8 h-8 mb-4 font-thin text-gray-400'/>,
    header: 'Used Car',
    subheader: 'Condition'
  }]

  const keyFeatures=[
    'Premium Wheel','Moonroof','Premium Audio', 'Navigation', 'Front Heated Seats','Premium Seat Material','Bluetooth','Premium Seat Material','Front Heated Seats','Remote Engine Start','Blind Spot System','Multi-Zone Climate'
  ]
  return (
    <>
    <HeroSection/>
    <div className='flex container gap-2 px-0 py-14 m-auto'>
      <section className='flex flex-[65%] flex-col'>
      <Image
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-05.png"
            className="rounded-lg  borded-solid border-2"
            alt="cars"
          /> 
          <div className='mt-14'>
          <div className='font-bold  text-xl'>Car Info</div>
          <div className='justify-between flex mt-5'>
            {carInfo.map((ele,i)=>(
              <div key={i} className='flex items-center gap-2'>
               {ele.img}
               <header>
                <h1>{ele.header}</h1>
                <h2 className='font-normal text-gray-500 text-sm'>{ele.subheader}</h2>
               </header>
              </div>
            ))} 
          </div>

<div className='mt-14'>
         <h1 className='font-bold  text-xl'>Key Features</h1>
          <div className='grid grid-cols-4 mx-0 gap-4 mt-5'>
            {keyFeatures.map((item,i)=>(
              <div key={i} className='flex items-center gap-2'>
              <PiCheckCircleThin /><span className='text-gray-500 text-sm font-semibold'>{item}</span>
              </div>
            ))}
          </div>
          </div>
          </div>

          
      </section>

      <section className='flex flex-[35%]'>
        card section
      </section>
    </div>
    </>
  )
}

export default Auction;