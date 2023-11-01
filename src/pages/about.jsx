import React from 'react';
import HeroSection from '../components/heroSection';
import { AboutCard } from '../components/aboutCard';
import { Button, Image } from 'antd';
import Stepper from '../components/stepper';
import WhyChoose from '../components/whyChoose'
import Main from '../utils/main';

const About = () => {
  return (
    <Main>
      <HeroSection />

      {/* welcome section start  */}
      <div className="py-14 px-3 lg:p-14 w-full'">
        <div className="flex flex-col items-center">
          {' '}
          <div className="lg:w-4/5 w-auto flex flex-col gap-7 ">
            <div>
              <header className="font-medium text-lg text-center text-blue-400">
                (Since-1994)
              </header>
              <header className="text-4xl text-blue-900 font-bold text-center">
                Welcome To Drivco
              </header>
            </div>
            <div className="text-center w-full">
              <p className="leading-8 tracking-wide">
                We're passionate car agency <br /> we're thrilled to have you
                join our community of automotive enthusiasts and professionals.
                Whether you're a passionate driver, a car owner, or someone who
                loves all things automotive, you've come to the right place.At
                Drivco, we strive to create a space where people can connect,
                share knowledge, and explore the exciting world of automobiles.
                From discussing the latest car models and technologies to
                sharing driving tips and tricks, we're here to fuel your love
                for everything on wheels.Feel free to ask any questions you
                have, seek advice, or simply engage in friendly conversations
                with fellow members. Our community is full of experts and
                enthusiasts who are eager to share their insights and
                experiences. Buckle up and enjoy your journey with Drivco!
              </p>
            </div>
            <div className="text-center">
              <header className="text-lg font-bold">Natrison Mongla</header>
              <header>CEO & Founder</header>
            </div>
          </div>
        </div>
      </div>
      {/* welcome section start  */}

      {/* Why Only Choose Drivco */}
      <WhyChoose />
      {/* <div className="px-10 py-8  bg-white bg-cover bg-[url('https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/inner-bg.png')]">
        <div className='mx-4'>
          <div className="text-center w-4/5 m-auto mb-8">
            <h3 className="text-green-g1 text-lg tracking-widest mb-1">
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
      </div> */}

      {/* gallery section */}
      <div className="lg:mx-10 mx-3 mt-24">
        <h2 className="font-bold text-4xl text-center mb-8"> Drivco Gallery</h2>

        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-4">
            {[1, 2, 3, 4, 5, 6].map((ele) => (
              <Image
                key={ele}
                className="rounded-lg"
                src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/inner-page/gallery-01.png"
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="text-center my-5">
          <Button type="primary" className="bg-blue-500 px-8 h-10">
            View more
          </Button>
        </div>
      </div>

      {/* cartegories */}

      <div className="p-12">
        <div className="py-5">
          <header className="text-4xl font-bold mb-2">How Does It Work</header>
          <header className="text-base text-slate-400">
            Here are some of the featured cars in different categories
          </header>
        </div>
        {/* <div className="flex flex-col"> */}
        {/* <Stepper /> */}
        <div className="flex lg:flex-row flex-col text-center">
          {[1, 2, 3, 4].map((ele) => (
            <Stepper key={ele} step={ele}>
              <div className=" px-4 py-8 flex items-center flex-col gap-6 mx-8 mt-2">
                <div className=" border rounded-full">
                  <img
                    className="m-auto p-4 "
                    src="https://demo-egenslab.b-cdn.net/html/drivco/preview/assets/img/home2/icon/loaction.svg"
                    alt=""
                  />
                </div>

                <div className="flex flex-col gap-4 mx-4">
                  <h1 className="font-bold text-lg">Choose Any where</h1>
                  <p className="text-base text-slate-400">
                    Car servicing is the regular maintenance and inspection of a
                    vehicle to ensure.
                  </p>
                </div>
              </div>
              </Stepper>
          ))}
        </div>
      </div>


      {/* customer review  */}
     
    </Main>
  );
};

export default About;
