
import { GiSpeedometer } from 'react-icons/gi';
import QuickLinksHome from '../components/quickLinksHome';
import CarListingCard from '../components/carListingCard';
import MostSearchedCarousel from '../components/mostSearchedCarousel';
import ReviewSlider from '../components/Reviewslider';
import WhyChoose from '../components/whyChoose';

const Home = () => {
  return (
    <>
      <div className="lg:px-14 lg:py-14 bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
        <div className="ps-4 pe-8 flex py-14">
          <section className="lg:me-80">
            <span className="flex items-center  lg:gap-2 font-semibold lg:font-bold text-lg lg:text-2xl">
              Fastest Speed
              <GiSpeedometer />
            </span>
            <h1 className="flex flex-col font-bold text-5xl lg:text-7xl leading-tight">
              To Best Way Buy
              <span>Dream Car.</span>
            </h1>
            <p className="text-xl leading-9 text-gray-500">
              Car dealerships may sell new cars from one or several
              manufacturers, as well as used cars from a variety of sources.
            </p>
          </section>
          {/* banner-content */}

          <section className="hidden lg:flex-[50%] border-solid border-2 rounded-lg bg-white">
            <header>Find Your Dream Car</header>
          </section>
        </div>
      </div>

      <QuickLinksHome className="border-r " />
      <div className="my-14 px-2">
        <div className="w-full">
          <div className="lg:flex lg:items-center lg:justify-between lg:pt-8 lg:pb-0 px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">Available Brand Cars</span>
              <h1 className="lg:text-4xl text-3xl font-bold mt:5 mb-6">
                Most Searched Used Cars
              </h1>
            </div>
            <ul className="flex justify-between lg:items-end text-normal font-normal border-b-2 border-black">
              <li className="bg-black text-white px-2">Sedan</li>
              <li className="hover:bg-black hover:text-white px-2">SUV</li>
              <li className="hover:bg-black hover:text-white px-2">Hach</li>
              <li className="hover:bg-black hover:text-white px-2">Suzuki</li>
              <li className="hover:bg-black hover:text-white px-2">Tata</li>
            </ul>
          </div>
        </div>

        <div className="lg:m-auto lg:flex-row lg:px-10">
          <MostSearchedCarousel />
        </div>
      </div>
      {/* recently-lanched */}
      <div className="my-14 px-2">
        <div className="">
          <div className="lg:flex lg:items-center lg:justify-between px-2 pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">Available Brand Cars</span>
              <h1 className="lg:text-4xl text-3xl font-bold mt:5 mb-6">
                Most Searched Used Cars
              </h1>
            </div>
            <ul className="flex justify-between lg:items-end text-normal font-normal border-b-2 border-black">
              <li className="bg-black text-white px-2">Sedan</li>
              <li className="hover:bg-black hover:text-white px-2">SUV</li>
              <li className="hover:bg-black hover:text-white px-2">Hach</li>
              <li className="hover:bg-black hover:text-white px-2">Suzuki</li>
              <li className="hover:bg-black hover:text-white px-2">Tata</li>
            </ul>
          </div>
        </div>

        <div className="lg:grid flex flex-col gap-6 items-center justify-center py-10 lg:grid-cols-3 lg:gap-3 lg:px-10 lg:py-14">
          {[1, 2, 3, 4, 5, 6].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>
      {/* about */}
      <WhyChoose />
      {/* upcoming-cars */}
      <div className="my-14 px-2">
        <div className="w-full">
          <div className="lg:flex lg:justify-between px-4 lg:px-2 lg:pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">On The Way</span>
              <h1 className="text-4xl font-bold">Upcoming Cars</h1>
            </div>
          </div>
        </div>

        <div className="lg:grid flex flex-col gap-6 items-center justify-center py-10 lg:grid-cols-3 lg:gap-3 lg:px-10 lg:py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>
      {/* used-cars*/}
      <div className="my-14 px-2">
        <div className="w-full">
          <div className="lg:flex lg:justify-between px-4 lg:px-2 lg:pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">Used Cars</span>
              <h1 className="text-4xl font-bold">Top Rated Used Cars</h1>
            </div>
          </div>
        </div>

        <div className="lg:grid flex flex-col gap-6 items-center justify-center py-10 lg:grid-cols-3 lg:gap-3 lg:px-10 lg:py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>

      {/* Top Rate Used Cars */}
      <div className="my-14 px-2">
        <div className="w-full">
          <div className="lg:flex lg:justify-between px-4 lg:px-2 lg:pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">Used Cars</span>
              <h1 className="text-4xl font-bold">Top Rated Used Cars</h1>
            </div>
          </div>
        </div>

        <div className="lg:grid flex flex-col gap-6 items-center justify-center py-10 lg:grid-cols-3 lg:gap-3 lg:px-10 lg:py-14">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>

      {/* News and Car Bids */}
      <div className="my-14 px-2">
        <div className="w-full">
          <div className="lg:flex lg:justify-between px-4 lg:px-2 lg:pb-2">
            <div className="text-lg  tracking-widest font-medium">
              <span className="text-green-g1">News and Articles</span>
              <h1 className="text-4xl font-bold">Latest News and Car Bids.</h1>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-3 lg:px-10 lg:py-14 flex flex-col gap-6 items-center">
          {[1, 2, 3].map((ele) => (
            <CarListingCard key={ele} />
          ))}
        </div>
      </div>
      {/* customers-review */}
      <div className="my-14">
        <div className="w-full">
          <div className="flex justify-between px-2 pb-2">
            <div className="text-lg px-2  tracking-widest font-medium">
              <span className="text-green-g1">Customer Review</span>
              <h1 className="text-4xl font-bold">
                What our customers are saying
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:flex w-full lg:h-full lg:px-14 py-14 relative">
          <div className="hidden lg:block w-1/4 h-auto">
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/recommended-img.png"
              alt=""
              className="object-contain"
            />
          </div>
          <div className="lg:w-3/4 m-auto">
            <ReviewSlider />
          </div>
          <div className="lg:hidden w-1/4 h-auto absolute  left-1 bottom-0">
            <img
              src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home1/recommended-img.png"
              alt=""
              className="w-30%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

// import React from 'react';
// import { GiSpeedometer } from 'react-icons/gi';
// import QuickLinksHome from '../components/quickLinksHome';
// import CarListingCard from '../components/carListingCard';
// import MostSearchedCarousel from '../components/mostSearchedCarousel';
// import { AboutCard } from '../components/aboutCard';
// import ReviewSlider from '../components/Reviewslider';

// const Home = () => {
//   return (
//     <>
//       <div className="bg-cover bg-center bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
//         <div className="container mx-auto p-4 md:p-10">
//           <section>
//             <span className="flex items-center gap-2 font-bold text-xl md:text-2xl">
//               Fastest Speed <GiSpeedometer />
//             </span>
//             <h1 className="text-4xl md:text-7xl font-bold leading-tight mt-2 md:mt-4">
//               To Best Way Buy <br /> Dream Car.
//             </h1>
//             <p className="text-sm md:text-xl text-gray-500 mt-2 md:mt-4">
//               Car dealerships may sell new cars from one or several manufacturers, as well as used cars from a variety of sources.
//             </p>
//           </section>

//           {/* Mobile-friendly banner-content */}
//           <section className="mt-4 md:mt-10 border-2 rounded-lg bg-white">
//             <header className="text-lg md:text-xl p-2">Find Your Dream Car</header>
//           </section>
//         </div>
//       </div>

//       <QuickLinksHome className="border-r" />

//       <div className="my-6 md:my-14">
//         <div className="container mx-auto p-2 md:p-4">
//           <div className="text-lg tracking-wider font-medium">
//             <span className="text-green-g1 text-sm md:text-base">Available Brand Cars</span>
//             <h1 className="text-2xl md:text-4xl font-bold">Most Searched Used Cars</h1>
//           </div>
//           <ul className="flex flex-wrap text-xs md:text-sm font-normal border-b-2 border-black mt-2 md:mt-4">
//             <li className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-4 mb-2 md:mb-0">Sedan</li>
//             <li className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-4 mb-2 md:mb-0">SUV</li>
//             <li className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-4 mb-2 md:mb-0">Hatch</li>
//             <li className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mr-2 md:mr-4 mb-2 md:mb-0">Suzuki</li>
//             <li className="bg-black text-white px-2 py-1 md:px-4 md:py-2 mb-2 md:mb-0">Tata</li>
//           </ul>
//         </div>
//         <div className="p-2 md:p-4">
//           <MostSearchedCarousel />
//         </div>
//       </div>

//       {/* Other sections follow with similar modifications for mobile-friendliness. Adjust typography, spacing, and layout for each section as needed. */}
//     </>
//   );
// };

// export default Home;
