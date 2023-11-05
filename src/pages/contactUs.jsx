import React, { useEffect } from 'react';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { BsShop } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import ContactForm from '../components/contactForm';
import Map from '../components/map';
import HeroSection from '../components/heroSection';
import FormWrapper from '../components/forms/formWrapper';
import { contactForm } from '../utils/constant';
import Main from '../utils/main';
import Button from '../components/forms/button';

const ContactUs = () => {
  const contacts = [
    {
      mainHeader: 'Mobile Number',
      header: 'Call Now',
      content: '1234567890',
      icon: <FiPhoneCall className=" h-8 w-8  text-white-0" />,
    },

    {
      mainHeader: 'Email Id',
      header: 'To Know More',
      content: 'abc@emil.com',
      icon: <MdOutlineAlternateEmail className=" h-8 w-8 text-white-0" />,
    },

    {
      mainHeader: 'Office Address',
      header: 'Visit Us',
      content: 'Address: village-Maktapar, post-Sahjanwa, District- Gorakhpur, Uttar-Pradesh, India, Pin-273209',
      icon: <BsShop className=" h-8 w-8 text-white-0" />,
    },
  ];
  useEffect(()=>{window.scrollTo(0, 0)},[])
  return (
    <Main>
      <HeroSection/>
      {/* contact form  */}
      <div className="lg:m-14 m-4 flex lg:flex-row flex-col gap-4">
        <div className="flex flex-col justify-between gap-6 w-full lg:w-2/5 ">
          <header className="text- text-3xl font-semibold mb-4">
            Contact Us With Support Line
          </header>
          {/* cards  */}

          {contacts.map((item, i) => (
            <div
              key={i}
              className="px-4 lg:px-12 py-8 border rounded-lg relative flex flex-col "
            >
              <span className=" absolute -top-3 px-3 bg-white-0 ">
                {item.mainHeader}
              </span>
              <div className="flex  gap-4">
                <div className="flex items-center h-fit p-2 bg-blue-500 rounded-lg">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0 justify-center">
                  <header className="text-sm font-semibold">
                    {item.header}
                  </header>
                  <header className="text-lg font-semibold">
                    {item.content}
                  </header>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* form  */}
        <div className="border w-full lg:w-3/5 rounded-md p-4 lg:p-6">
          <div>
          <FormWrapper formObj={contactForm}/>
          <Button btnClass='primary' name='Submit Now' className={'lg:w-1/3'} />
          </div>
        </div>
      </div>
      <Map width={'100%'} height={'h-80'} />
    </Main>
  );
};

export default ContactUs;
