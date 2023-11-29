import React from 'react'
import AboutCard from './aboutCard'
export const WhyChoose = () => {
  return (
    
    <div className="lg:!px-10 lg:!py-8  bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
    <div className="py-12 mx-4">
      <div className="text-center w-4/5 m-auto mb-8">
        <h3 className="text-blue-400 text-xs lg:!text-lg tracking-widest mb-1">
          Best Car Agency
        </h3>
        <h1 className="font-bold text-3xl lg:!text-4xl">Why Only Choose Drivco</h1>
      </div>

      <div className="flex flex-col lg:!flex-row justify-between gap-5 my-10">
        <AboutCard /> <AboutCard /> <AboutCard />
      </div>

      <div className="border-t border-blue-b1 border-b ">
        <div className="my-8 flex">
          {[1, 2, 3, 4].map((ele) => (
            <div
              key={ele}
              className="flex flex-col lg:!flex-row gap-4 w-full items-center justify-center border-r border-blue-b1 lg:!last:border-none lg:!last:justify-end lg:!first:justify-start"
            >
              <div>
              <img
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                alt=""
              />
              </div>
              <div className="text-center">
                <header className="font-bold text-2xl">19+</header>
                <header>Car Available</header>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  )
}
export default WhyChoose;