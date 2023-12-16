import React, { useEffect, useState } from "react";
import { DatePicker, Space, Checkbox, Empty } from "antd";
import HeroSection from "../components/heroSection";
import { IoIosCloseCircleOutline, IoIosClose } from "react-icons/io";
import CarListingCard from "../components/carListingCard";
import { homeForm } from "../utils/constant";

import { Slider, Switch } from "antd";
import Main from "../utils/main";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/car";
import Loader from "../assets/loader/loader";
import { useParams } from "react-router-dom";

const onMinYearChange = (date, dateString) => {
  console.log(date, dateString);
};
const onMaxYearChange = (date, dateString) => {
  console.log(date, dateString);
};

const CarListing = () => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleCheckboxChange = (value) => {
    setSelectedValue(value);
    console.log(value);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const options = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dispatch = useDispatch();
  const { loading, carList } = useSelector((state) => state.cars);
  const carsListing = carList?.list;
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const price = searchParams.get("price");
    const bodyType = searchParams.get("bodyType");
    if (price && bodyType === "undefined") {
      const testPrice = price?.split("-");
      let searchObj;
      if (!testPrice[1]) {
        searchObj = {
          "price[gte]": testPrice[0],
        };
      } else {
        searchObj = {
          "price[gte]": testPrice[0],
          "price[lte]": testPrice[1],
        };
      }
      dispatch(getAllCars(10, 1, "", searchObj));
    } else if (price === "undefined" && bodyType) {
      const searchObj = {
        bodyType,
      };
      dispatch(getAllCars(10, 1, "", searchObj));
    } else if (price && bodyType) {
      const testPrice = price?.split("-");
      let searchObj;
      if (!testPrice[1]) {
        searchObj = {
          "price[gte]": testPrice[0],
        };
      } else {
        searchObj = {
          "price[gte]": testPrice[0],
          "price[lte]": testPrice[1],
        };
      }
      dispatch(getAllCars(10, 1, "", searchObj));
    } else {
      dispatch(getAllCars());
    }
  }, [location.search]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const bodyTypeOptions = homeForm[1].options;

  if (loading) {
    return <Loader />;
  }
  return (
    <Main>
      <HeroSection />
      <div className="flex w-full py-4 pb-10 lg:!py-14 lg:!px-12 px-4">
        <div className="flex flex-col-reverse lg:!flex-row w-full gap-4 justify-between mt-6 ">
          <section className="lg:!w-1/3 w-auto">
            <div className="flex gap-8 mb-2 max-w-md mx-auto mt-8 py-2">
              <h1>Search filter</h1>
              <div className="flex items-center">
                <IoIosCloseCircleOutline />
                Clear All
              </div>
            </div>
            <div>
              <ul className="flex items-center gap-3">
                <li className="flex items-center gap-1 border-solid border-2 rounded-3xl  px-1 bg-gray-100 text-sm">
                  <IoIosClose />
                  Wagon
                </li>
                <li className="flex items-center gap-1 border-solid border-2 rounded-3xl  px-1 bg-gray-100 text-sm">
                  <IoIosClose />
                  pranam city
                </li>
                <li className="flex items-center gap-1 border-solid border-2 rounded-3xl  px-1 bg-gray-100 text-sm">
                  <IoIosClose />
                  toyota
                </li>
              </ul>
            </div>

            {/* filter-form */}
            <div className="mt-14">
              <div>
                <div className="max-w-md mx-auto mt-8 p-4  rounded-lg bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="font-bold text-xl ">Brands</h2>
                  <div className="container">
                    <div>
                      <form action="">
                        <input
                          className="w-full px-3 py-2 h-10 mt-4 rounded-md"
                          type="text"
                          placeholder="Search brand"
                        />
                      </form>

                      <div className="flex flex-col gap-2 mt-4">
                        {carsListing?.map((ele) => (
                          <Checkbox
                            key={ele?._id}
                            onChange={() => console.log("check")}
                          >
                            {ele?.brand?.name}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg  bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="text-xl font-semibold mb-4">Year</h2>
                  <div className="flex justify-center gap-6">
                    <Space direction="vertical">
                      <DatePicker onChange={onMinYearChange} picker="year" />
                    </Space>

                    <Space direction="vertical">
                      <DatePicker onChange={onMaxYearChange} picker="year" />
                    </Space>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="font-bold text-xl ">Body Type</h2>
                  <div className="container">
                    <div>
                      <div className="flex flex-col gap-2 mt-4">
                        {bodyTypeOptions?.map((ele, i) => (
                          <Checkbox
                            key={i} // Use a unique key for each option
                            value={ele.value} // Set the value for each option
                            checked={selectedValue === ele.value}
                            onClick={() => handleCheckboxChange(ele.value)}
                          >
                            {ele.label}
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="text-xl font-semibold mb-4">Price</h2>
                  <Slider range defaultValue={[50000, 10000000]} />
                  <div className="flex gap-6 h-10 rounded-lg items-center mt-5 mb-4">
                    <span className="px-10 py-2 bg-white-0 rounded-lg">
                      $333
                    </span>
                    <span className="px-10 py-2 bg-white-0 rounded-lg">
                      {" "}
                      $444
                    </span>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 rounded-lg bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="font-bold text-xl ">Colours</h2>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {carsListing?.map((ele) => (
                      <Checkbox
                        className=""
                        key={ele?._id}
                        name="color"
                        onChange={() => console.log("check")}
                      >
                        <h1>{ele.color}</h1>
                      </Checkbox>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* listing  */}

          <section className="lg:!w-2/3 w-auto">
            <h1 className="mt-4 mb-10">
              Showing {carList && carList?.elements} car available in stock
            </h1>
            {carList && carList?.elements > 0 ? (
              <div className="grid lg:!grid-cols-2 grid-row gap-5">
                {carList &&
                  carList?.list?.map((ele) => (
                    <div key={ele?._id} className="">
                      <CarListingCard item={ele} />
                    </div>
                  ))}
              </div>
            ) : (
              <Empty />
            )}
          </section>
        </div>
      </div>
    </Main>
  );
};

export default CarListing;
