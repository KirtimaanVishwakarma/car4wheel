import React from 'react';
import googlePlay from '@public/googlePlay.svg'
const DownloadButton = () => {
  const handleDownload = () => {

    const appPackage = 'com.example.yourapp';

    const playStoreUrl = `https://play.google.com/store/apps/details?id=${appPackage}`;

    window.open(playStoreUrl, '_blank');
  };

  return (
    // <button
    //   className=""
    //   onClick={handleDownload}
    // >
    //   <div className='flex items-center gap-4 bg-white text-black w-auto p-4 rounded-lg'>
    //   <img  className='h-6 w-6' src={googlePlay} ></img>
    //   <div> 
    //     <div>
    //     GET IN
    //     </div>Poogle Play</div>
    //   </div>
    
    // </button>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.877105696872!2d83.40160687519547!3d26.780187076726452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144de9572da99%3A0xa27b8a380045f3c3!2sPadri%20Bazar%20Police%20Chowki!5e0!3m2!1sen!2sin!4v1697184631364!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  );
};

export default DownloadButton;
