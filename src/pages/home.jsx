import React from 'react';
import { GiSpeedometer } from 'react-icons/gi';
import QuickLinksHome from '../components/quickLinksHome';
import CarListingCard from '../components/carListingCard';
import MostSearchedCarousel from '../components/mostSearchedCarousel';
import { AboutCard } from '../components/aboutCard';
import ReviewSlider from '../components/Reviewslider';
import CustomerReviewCard from '../components/CustomerReviewCard';
import { BiFullscreen } from 'react-icons/bi';
const Home = () => {
  return (
    <>
      <div className="m-auto bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
        <div className="m-auto container flex  px-1 py-28">
          <section className=" container ms-2 me-80">
            <span className="flex items-center gap-2 font-bold text-2xl">
              Fastest Speed
              <GiSpeedometer />
            </span>
            <h1 className="flex flex-col font-bold text-7xl leading-tight">
              To Best Way Buy
              <span>Dream Car.</span>
            </h1>
            <p className="text-xl leading-9 text-gray-500">
              Car dealerships may sell new cars from one or several
              manufacturers, as well as used cars from a variety of sources.
            </p>
          </section>
          {/* banner-content */}

          <section className="flex-[50%] container border-solid border-2 rounded-lg bg-white">
            <header>Find Your Dream Car</header>
          </section>
        </div>
      </div>

      <QuickLinksHome className="border-r " />
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">Available Brand Cars</span>
              <h1 className="text-4xl font-bold">Most Searched Used Cars</h1>
            </div>
            <ul className="flex items-end text-normal font-normal border-b-2 border-black">
              <li className="bg-black text-white px-2">Sedan</li>
              <li className="hover:bg-black hover:text-white px-2">SUV</li>
              <li className="hover:bg-black hover:text-white px-2">Hach</li>
              <li className="hover:bg-black hover:text-white px-2">Suzuki</li>
              <li className="hover:bg-black hover:text-white px-2">Tata</li>
            </ul>
          </div>
        </div>

        <div className=" flex px-10 py-14">
          <MostSearchedCarousel />
        </div>
      </div>
      {/* recently-lanched */}
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">Recent Launched</span>
              <h1 className="text-4xl font-bold">Recent Launched Car</h1>
            </div>
            <ul className="flex items-end text-normal font-normal border-b-2 border-black">
              <li className="bg-black text-white px-2">Sedan</li>
              <li className="hover:bg-black hover:text-white px-2">Popular</li>
              <li className="hover:bg-black hover:text-white px-2">New Car</li>
              <li className="hover:bg-black hover:text-white px-2">Used Car</li>
              <li className="hover:bg-black hover:text-white px-2">
                Auction Car
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-10 py-14">
          {[1, 2, 3, 4, 5, 6].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>
      {/* about */}
      <div className="px-10 py-8  bg-white bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
        <div className="mx-4">
          <div className="text-center w-4/5 m-auto mb-8">
            <h3 className="text-green-10 text-lg tracking-widest mb-1">
              Best Car Agency
            </h3>
            <h1 className="font-bold text-4xl">Why Only Choose Drivco</h1>
          </div>

          <div className="flex justify-between gap-5 my-10">
            <AboutCard /> <AboutCard /> <AboutCard />
          </div>

          <div className="border-t border-b ">
            <div className="my-8 flex ">
              {[1, 2, 3, 4].map((ele) => (
                <div
                  key={ele}
                  className="flex gap-4 w-full justify-center border-r last:border-none last:justify-end first:justify-start"
                >
                  <img
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/icon/av-car.svg"
                    alt=""
                  />
                  <div className="">
                    <header className="font-bold text-2xl">19+</header>
                    <header>Car Available</header>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* upcoming-cars */}
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">On The Way</span>
              <h1 className="text-4xl font-bold">Upcoming Cars</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-10 py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>
      {/* used-cars*/}
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">Used Car</span>
              <h1 className="text-4xl font-bold">Top Rate Used Cars</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-10 py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>

      {/* Top Rate Used Cars */}
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">Used Car</span>
              <h1 className="text-4xl font-bold">Top Rate Used Cars</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-10 py-14">
          {[1, 2, 3,].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>

      {/* Top Rate Used Cars */}
      <div className="my-14">
        <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">News & Article</span>
              <h1 className="text-4xl font-bold">The Latest News Car & Bids</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 px-10 py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>

      <div className="my-14">
      <div className="container m-auto">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-10">Customer Review</span>
              <h1 className="text-4xl font-bold">What our customers are saying</h1>
            </div>
          </div>
        </div>

       
      <div className="flex h-full px-14 py-14">
  <div className="w-1/4 h-auto">
    <img
      src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/recommended-img.png"
      alt=""
      className="h-full"
      />
  </div>
  <div className="w-3/4">
    <ReviewSlider />
  </div>
</div>
</div>

     
    </>
  );
};

export default Home;
