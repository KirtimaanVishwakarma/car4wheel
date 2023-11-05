import React, { useEffect, useState } from 'react';
import HeroSection from '../components/heroSection';
import { IoIosCloseCircleOutline, IoIosClose } from 'react-icons/io';
import { Checkbox } from 'antd';
import CarListingCard from '../components/carListingCard';

import { Slider, Switch } from 'antd';
import Main from '../utils/main';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCars } from '../redux/actions/car';
import Loader from '../assets/loader/loader';

const CarListing = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const dispatch = useDispatch();
  const { loading, carList } = useSelector((state) => state.cars);
  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  useEffect(()=>{window.scrollTo(0, 0)},[])
  if(loading){
    return <Loader/>
  }
  return (
    <Main>
      <HeroSection />
      <div className="flex w-full py-4 pb-10 lg:py-14 lg:px-12 px-4">
        <div className="flex flex-col-reverse lg:flex-row w-full gap-4 justify-between mt-6 ">
          <section className="lg:w-1/3 w-auto">
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
                  <h2 className="font-bold text-xl ">Make</h2>
                  <div className="container">
                    <div>
                      <form action="">
                        <input
                          className="w-full px-3 py-2 h-10 mt-4 rounded-md"
                          type="text"
                          placeholder="Search Make"
                        />
                      </form>

                      <div className="flex flex-col gap-2 mt-4">
                        {[1, 2, 3, 4, 5].map((ele) => (
                          <Checkbox
                            key={ele}
                            onChange={() => console.log('check')}
                          >
                            Baleno (1234)
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg  bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="text-xl font-semibold mb-4">Year</h2>
                  <div className="flex justify-center gap-6">
                    <form>
                      <div className="">
                        <select
                          className="w-36 px-4 py-2 rounded-md"
                          value={selectedOption}
                          onChange={handleOptionChange}
                        >
                          <option value="" disabled className="">
                            Min Year
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>

                    <form>
                      <div className="">
                        <select
                          className="w-36 px-4 py-2 rounded-md"
                          value={selectedOption}
                          onChange={handleOptionChange}
                        >
                          <option value="" disabled>
                            Min Year
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="font-bold text-xl ">Body Type</h2>
                  <div className="container">
                    <div>
                      <form action="">
                        <input
                          className="w-full px-3 py-2 h-10 mt-4 rounded-md"
                          type="text"
                          placeholder="Search Make"
                        />
                      </form>
                      <div className="flex flex-col gap-2 mt-4">
                        {[1, 2, 3, 4, 5].map((ele) => (
                          <Checkbox
                            key={ele}
                            onChange={() => console.log('check')}
                          >
                            Baleno (1234)
                          </Checkbox>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg  bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="text-xl font-semibold mb-4">Year</h2>
                  <div className="flex gap-6">
                    <form>
                      <div className="mb-4">
                        <select
                          className="w-full px-3 py-2 rounded-md"
                          value={selectedOption}
                          onChange={handleOptionChange}
                        >
                          <option value="" disabled>
                            Min Year
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>

                    <form>
                      <div className="mb-4">
                        <select
                          className="w-full px-3 py-2 rounded-md"
                          value={selectedOption}
                          onChange={handleOptionChange}
                        >
                          <option value="" disabled>
                            Min Year
                          </option>
                          {options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="text-xl font-semibold mb-4">Price</h2>
                  <Slider range defaultValue={[0, 10]} />
                  <div className="flex gap-6 h-10 rounded-lg items-center mt-5 mb-4">
                    <span className="px-10 py-2 bg-white-0 rounded-lg">
                      $333
                    </span>
                    <span className="px-10 py-2 bg-white-0 rounded-lg">
                      {' '}
                      $444
                    </span>
                  </div>
                </div>
                <div className="max-w-md mx-auto mt-8 p-4 rounded-lg bg-white-0 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
                  <h2 className="font-bold text-xl ">Colours</h2>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((ele) => (
                      <Checkbox
                        className=""
                        key={ele}
                        onChange={() => console.log('check')}
                      >
                        <h1>Baleno (1234)</h1>
                      </Checkbox>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

                      {/* listing  */}

          <section className="lg:w-2/3 w-auto">
            <h1 className="mt-4 mb-10">Showing {carList && carList?.totalElement} car available in stock</h1>
            <div className="grid lg:grid-cols-2 grid-row gap-5">
              {carList && carList?.list?.map((ele) => (
                <div key={ele?._id} className="">
                  <CarListingCard item={ele}/>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
};

export default CarListing;
