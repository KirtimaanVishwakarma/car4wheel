import React, { useEffect } from "react";
import HeroSection from "../components/heroSection";
import { Image } from "antd";
import {
  PiCheckCircleThin,
  PiEngineLight,
  PiEngineThin,
  PiGasCan,
  PiCarThin,
  PiGasPumpThin,
  PiGaugeThin,
} from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import Main from "../utils/main";
import FormWrapper from "../components/forms/formWrapper";
import { auctionForm } from "../utils/constant";
import Button from "../components/forms/button";
import { PiPaperPlaneTiltThin, PiHammerThin } from "react-icons/pi";
import { addInquiry } from "../redux/actions/inquiryAction";
import { useDispatch, useSelector } from "react-redux";

const Auction = () => {
  // car info data

  const carInfo = [
    {
      img: <PiGaugeThin className="w-8 h-8  lg:!mb-4  text-gray-400" />,
      header: "25,100 miles",
      subheader: "Mileage",
    },
    {
      img: <PiEngineThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: "22,231 cc",
      subheader: "Engine",
    },
    {
      img: <PiGasPumpThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: "Petrol + Gas",
      subheader: "Fuel Type",
    },
    {
      img: <PiCarThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: "Used Car",
      subheader: "Condition",
    },
  ];

  // key Features array

  const keyFeatures = [
    "Premium Wheel",
    "Moonroof",
    "Premium Audio",
    "Navigation",
    "Front Heated Seats",
    "Premium Seat Material",
    "Bluetooth",
    "Premium Seat Material",
    "Front Heated Seats",
    "Remote Engine Start",
    "Blind Spot System",
    "Multi-Zone Climate",
  ];
  // overviews

  const overviews = [
    {
      specificationLabel: "Make",
      specification: "lamborghini",
    },
    {
      specificationLabel: "Model",
      specification: "lamborghini ave11",
    },
    {
      specificationLabel: "Year/Month",
      specification: "2023",
    },
    {
      specificationLabel: "Mileage",
      specification: "25,100 miles",
    },
    {
      specificationLabel: "Door’s",
      specification: "4 doors",
    },
    {
      specificationLabel: "Engine",
      specification: "22,231 cc",
    },
    {
      specificationLabel: "Color’s",
      specification: "sky blue",
    },
    {
      specificationLabel: "Repaire",
      specification: "no",
    },
    {
      specificationLabel: "Steering",
      specification: "right",
    },
    {
      specificationLabel: "Steating Catacity",
      specification: "08",
    },
    {
      specificationLabel: "Fuel Type",
      specification: "petrol+gas",
    },
    {
      specificationLabel: "No. of Cylinder",
      specification: "03",
    },
    {
      specificationLabel: "Transmission",
      specification: "Manual",
    },
    {
      specificationLabel: "Wheel’s",
      specification: "04",
    },
  ];
  const enginePerformance = [
    {
      specificationLabel: "Engine Size",
      specification: "3.5 L",
    },
    {
      specificationLabel: "Valve Gear",
      specification: "DOHC with VVT",
    },
    {
      specificationLabel: "Induction",
      specification: "Aspirated",
    },
    {
      specificationLabel: "Fuel Injection",
      specification: "Direct Injection",
    },
    {
      specificationLabel: "Cylinders",
      specification: "6 cyl",
    },
    {
      specificationLabel: "Power",
      specification: "140 kw 7000 rpm",
    },
    {
      specificationLabel: "Engine Config",
      specification: "In-line",
    },
    {
      specificationLabel: "Engine Location",
      specification: "front",
    },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addInquiry());
  }, [dispatch]);
  const { loading, getInquiry } = useSelector((state) => state.inquiry);
  console.log(getInquiry);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Main>
      <HeroSection />
      <div className="flex lg:!flex-row flex-col gap-6 px-2 lg:!my-14 py-14 lg:!px-10">
        <section className="flex flex-[65%] flex-col">
          <Image
            src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/color-car-05.png"
            className="rounded-lg shadow-lg p-3"
            alt="cars"
          />

          {/* car info */}
          <div className="mt-10">
            <div className="font-bold  text-xl">Car Info</div>
            <div className="grid grid-cols-2 gap-y-3 items-center justify-between lg:!flex mt-5">
              {carInfo.map((ele, i) => (
                <div key={i} className="flex justify-center items-center gap-2">
                  {ele.img}
                  <header>
                    <h1 className="font-bold">{ele.header}</h1>
                    <h2 className="font-normal text-gray-500 text-sm">
                      {ele.subheader}
                    </h2>
                  </header>
                </div>
              ))}
            </div>

            {/* key features */}
            <div className="mt-14 ">
              <h1 className="font-bold  text-xl">Key Features</h1>
              <div className="grid rounded-lg p-4 border  lg:!grid-cols-4 mx-0 gap-4 mt-4">
                {keyFeatures.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <PiCheckCircleThin />
                    <span className="text-gray-500 text-sm font-semibold">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* overviews */}
          <div className="mt-14">
            <h1 className="font-bold  text-xl">Overviews</h1>
            <div className="lg:!grid rounded-lg p-4 border lg:!grid-cols-2 gap-x-14 mt-4">
              {overviews.map((item, i) => (
                <div key={i} className="">
                  <ul className="flex justify-between h-10 items-center">
                    <li>{item.specificationLabel}</li>
                    <span className="text-gray-500">{item.specification}</span>
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Engine Performance */}
          <div className="mt-14">
            <h1 className="font-bold  text-xl">Engine Performance</h1>
            <div className="lg:!grid rounded-lg p-4 border lg:!grid-cols-2 gap-x-14 mt-4">
              {enginePerformance.map((item, i) => (
                <div key={i} className="">
                  <ul className="flex justify-between h-10 items-center">
                    <li>{item.specificationLabel}</li>
                    <span>{item.specification}</span>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* form section */}
        <section className="flex flex-col flex-[35%] gap-11">
          <div className="w-full outline-gray-200 outline-dashed rounded-lg h-fit">
            <div className="p-6 flex flex-col gap-4">
              <div className="m-auto mb-4">
                <div className="grid grid-flow-col w-full gap-5 text-center auto-cols-max">
                  <div className="flex flex-col bg-pink-50 p-2 rounded-lg">
                    <span className="countdown font-mono text-4xl">
                      <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                  </div>
                  <div className="flex flex-col bg-pink-50 p-2 rounded-lg">
                    <span className="countdown font-mono text-4xl">
                      <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                  </div>
                  <div className="flex flex-col bg-pink-50 p-2 rounded-lg">
                    <span className="countdown font-mono text-4xl">
                      <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                  </div>
                  <div className="flex flex-col bg-pink-50 p-2 rounded-lg">
                    <span className="countdown font-mono text-4xl">
                      <span style={{ "--value": 20 }}></span>
                    </span>
                    sec
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <span>Starting Bids</span>
                <span>$23,323.000</span>
              </div>
              <div className="flex justify-between">
                <span>Total Bids</span>
                <span>10 Person</span>
              </div>
              <Button
                btnClass="primary"
                name="Place Bids"
                icon={<PiHammerThin className="w-6 h-6" />}
              />
              {/* <Button className="h-11">Place Bids</Button> */}
            </div>
          </div>

          {/* form  */}
          <div className="w-full rounded-lg bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
            <div className="p-4 lg:!p-8 flex flex-col gap-3">
              <header className="font-semibold text-2xl">
                To More inquiry
              </header>
              <header className="text-sm">
                If choose this car to contact easily with us.
              </header>
              <FormWrapper formObj={auctionForm} />
              <Button
                btnClass="primary"
                name="Send Message"
                icon={<PiPaperPlaneTiltThin className="w-6 h-6" />}
              />
              {/* <div>
                <ContactForm />
              </div> */}
            </div>
          </div>

          {/* recent added car  */}
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <header className="font-semibold text-2xl">
                Recent Used Car
              </header>
              <div className="flex flex-col gap-3">
                {[1, 2, 3, 4].map((ele) => (
                  <div
                    key={ele}
                    className="card w-full bg-base-100 outline-dashed shadow-xl flex gap-2 flex-row"
                  >
                    <figure className="p-2 flex-1 h-40 relative">
                      <img
                        className="h-full object-cover rounded-lg"
                        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                      />

                      <div className="absolute bottom-2 left-1 w-2/3 text-center bg-white-0 bg-clip">
                        <span className="m-auto">$7,656.007</span>
                      </div>
                    </figure>
                    <div className="flex-1 py-2 flex flex-col justify-around">
                      <header className="font-bold pb-1 w-fit border-b">
                        Mercedes-Benz-2023
                      </header>
                      <div className="flex gap-2">
                        <GiGearStickPattern className="h-full" />
                        <header>Automactic</header>
                      </div>
                      <div className="flex gap-2">
                        <PiGasCan className="h-full" />
                        <header>Automactic</header>
                      </div>
                      <div className="flex gap-2">
                        <PiEngineLight className="h-full" />
                        <header>Automactic</header>
                      </div>
                    </div>
                  </div>
                ))}
                <Button btnClass="secondary" name="View All Cars" />
                {/* <Button className="h-11 mt-4">View All Cars</Button> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default Auction;
