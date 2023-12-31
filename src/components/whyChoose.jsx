import React from "react";
import AboutCard from "./aboutCard";
export const WhyChoose = ({ label1, label2, phrase }) => {
  return (
    <div className="lg:!px-10 lg:!py-8  bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
      <div className="py-12 mx-4">
        <div className="text-center w-4/5 m-auto mb-8">
          <h3 className="text-blue-400 text-xs lg:!text-lg tracking-widest mb-1">
            Best Car Agency
          </h3>
          <h1 className="font-bold text-3xl lg:!text-4xl">
            Why Only Choose Drivco
          </h1>
        </div>

        <div className="flex flex-col lg:!flex-row justify-between gap-5 my-10">
          <AboutCard
            label1={"Sensible"}
            label2={"pricing"}
            phrase={
              "We have cars for Every Stride, Priced for Every Strata. We Smart4Wheels are smart for pocket. Discover Sensible Pricing at Smart4Wheels!"
            }
          />
          <AboutCard
            label1={"Diverse"}
            label2={"collection"}
            phrase={
              "We have various collection of both used as well as new cars. It's Your Journey & Your Choice, Explore a Diverse Horizon of Both Used and New Cars!"
            }
          />
          <AboutCard
            label1={"Outstanding"}
            label2={"Service"}
            phrase={
              "From expert guidance to seamless transactions, we're here for you at every turn to elevate your car-buying experience, where your satisfaction is our driving passion!"
            }
          />
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
  );
};
export default WhyChoose;
