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
import { useDispatch, useSelector } from "react-redux";
import { getAllCars, getCarDetails } from "../redux/actions/car";
import { formatCurrency } from "../utils/apiUtils";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../assets/loader/loader";
import { useState } from "react";
import { addInquiry } from "../redux/actions/inquiryAction";

const CarInfo = () => {
  const { loading, carList } = useSelector((state) => state.cars);
  const { loading: inquiryLoading } = useSelector((state) => state.inquiry);
  const { details } = useSelector((state) => state.cars);
  const [inputObj, setInputObj] = useState({});
  const overviews = [
    {
      specificationLabel: "Make",
      specification: details?.car?.brand?.name || "----",
    },
    {
      specificationLabel: "Model",
      specification: details?.car?.model || "----",
    },
    {
      specificationLabel: "Year/Month",
      specification: details?.car?.modelYear || "----",
    },
    {
      specificationLabel: "Mileage",
      specification: `${details?.car?.mileage} kmpl`,
    },
    {
      specificationLabel: "Door’s",
      specification: details?.car?.doors || "----",
    },
    {
      specificationLabel: "Engine",
      specification: details?.car?.engine || "----",
    },
    {
      specificationLabel: "Color’s",
      specification: details?.car?.color || "----",
    },
    {
      specificationLabel: "Repaired",
      specification: details?.car?.repaire ? "Yes" : "No",
    },
    {
      specificationLabel: "Steering",
      specification: details?.car?.steering || "----",
    },
    {
      specificationLabel: "Steating Catacity",
      specification: details?.car?.catacity || "----",
    },
    {
      specificationLabel: "Fuel Type",
      specification: details?.car?.fuelType[0] || "----",
    },
    {
      specificationLabel: "No. of Cylinder",
      specification: details?.car?.cylinder || "----",
    },
    {
      specificationLabel: "Transmission",
      specification: details?.car?.transmission || "----",
    },
    {
      specificationLabel: "Wheel’s",
      specification: details?.car?.wheel || "----",
    },
  ];
  const enginePerformance = [
    {
      specificationLabel: "Engine Size",
      specification: details?.car?.engineSize || "----",
    },
    {
      specificationLabel: "Valve Gear",
      specification: details?.car?.valveGear || "----",
    },
    {
      specificationLabel: "Induction",
      specification: details?.car?.induction || "----",
    },
    {
      specificationLabel: "Fuel Injection",
      specification: details?.car?.fuleInjection || "----",
    },
    {
      specificationLabel: "Cylinders",
      specification: details?.car?.cylinder || "----",
    },
    {
      specificationLabel: "Power",
      specification: details?.car?.power || "----",
    },
    {
      specificationLabel: "Engine Config",
      specification: details?.car?.engineConfig || "----",
    },
    {
      specificationLabel: "Engine Location",
      specification: details?.car?.engineLocation || "----",
    },
  ];

  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const carInfo = [
    {
      img: <PiGaugeThin className="w-8 h-8  lg:mb-4  text-gray-400" />,
      header: `${details?.car?.odometer} kms`,
      subheader: "Odometer",
    },
    {
      img: <PiEngineThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: `${formatCurrency(details?.car?.engineSize)} cc`,
      subheader: "Engine",
    },
    {
      img: <PiGasPumpThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: details?.car?.fuelType[0],
      subheader: "Fuel Type",
    },
    {
      img: <PiCarThin className="w-8 h-8 mb-4  text-gray-400" />,
      header: details?.car?.condition,
      subheader: "Condition",
    },
  ];
  const submitHandler = async (e) => {
    e.preventDefault();
    const body = {
      carId: id,
      name: inputObj?.name,
      email: inputObj?.email,
      contact: inputObj?.contactNumber,
      message: inputObj?.message,
    };
    dispatch(addInquiry(body));
  };
  useEffect(() => {
    dispatch(getAllCars(4));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getCarDetails(id));
  }, [id, dispatch]);

  const loader = inquiryLoading || loading;
  if (loader) {
    return <Loader />;
  }
  return (
    <Main>
      <HeroSection />
      <div className="flex lg:flex-row flex-col gap-6 px-2 lg:my-14 py-14 lg:px-10">
        <section className="flex flex-[65%] flex-col">
          <Image
            src={details?.car?.images?.url}
            className="rounded-lg shadow-lg p-3"
            alt="cars"
          />

          {/* car info */}
          <div className="mt-10">
            <div className="font-bold  text-xl">Car Info</div>
            <div className="grid grid-cols-2 gap-y-3 items-center justify-between lg:flex mt-5">
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
              <div className="grid rounded-lg p-4 border  lg:grid-cols-4 mx-0 gap-4 mt-4">
                {details &&
                  details?.car?.features[0]?.split(",")?.map((item, i) => (
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
            <div className="lg:grid rounded-lg p-4 border lg:grid-cols-2 gap-x-14 mt-4">
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
            <div className="lg:grid rounded-lg p-4 border lg:grid-cols-2 gap-x-14 mt-4">
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
          <div className="w-full outline-dashed outline-blue-b1 rounded-lg h-fit">
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
            <div className="p-4 lg:p-8 flex flex-col gap-3">
              <header className="font-semibold text-2xl">
                To More Inquiry
              </header>
              <header className="text-sm">
                If choose this car to contact easily with us.
              </header>
              <form onSubmit={submitHandler}>
                <FormWrapper formObj={auctionForm} setInputObj={setInputObj} />
                <Button
                  type={"submit"}
                  btnClass="primary"
                  name="Send Message"
                  icon={<PiPaperPlaneTiltThin className="w-6 h-6" />}
                />
              </form>
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
                {carList &&
                  carList?.list?.map((ele) => (
                    <div
                      onClick={() => navigate(`/car-lists/${ele._id}`)}
                      key={ele._id}
                      className="card cursor-pointer w-full bg-base-100 outline-dashed outline-blue-b1 flex gap-2 flex-row"
                    >
                      <figure className="p-2 flex-1 h-40 relative">
                        <img
                          className="h-full object-cover rounded-lg"
                          src={ele?.images?.url}
                          alt="Shoes"
                        />

                        <div className="absolute bottom-2 left-1 w-2/3 text-center bg-white-0 bg-clip">
                          <span className="m-auto">
                            ₹{formatCurrency(ele?.price)}
                          </span>
                        </div>
                      </figure>
                      <div className="flex-1 py-2 flex flex-col justify-around">
                        <header className="font-bold pb-1 w-fit border-b">
                          <span className="uppercase">{ele?.model}</span>-
                          <span>{ele?.modelYear}</span>
                        </header>
                        <div className="flex gap-2">
                          <GiGearStickPattern className="h-full" />
                          <header>{ele?.transmission}</header>
                        </div>
                        <div className="flex gap-2">
                          <PiGasCan className="h-full" />
                          <header>{ele?.fuelType[0]}</header>
                        </div>
                        <div className="flex gap-2">
                          <PiEngineLight className="h-full" />
                          <header>{ele?.odometer}</header>
                        </div>
                      </div>
                    </div>
                  ))}
                <Link
                  className="border text-center py-1 text-blue-b1 border-blue-b1 rounded hover:text-white-0 hover:bg-blue-b1"
                  to="/car-lists"
                >
                  View All Cars
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Main>
  );
};

export default CarInfo;
