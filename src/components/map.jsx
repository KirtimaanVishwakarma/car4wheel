import React from 'react';

function Map({width,height}) {
  return (
    <div className={`${height||'h-full'} rounded-lg overflow-hidden`}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.8654401840604!2d83.40408897519548!3d26.78055887672616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144d93f4c079f%3A0xbef0059403c98c8b!2sPadri%20Bazar%2C%20Vishwakarmapuram%2C%20Gorakhpur%2C%20Uttar%20Pradesh%20273014!5e0!3m2!1sen!2sin!4v1697196871807!5m2!1sen!2sin"
 width={width || '400'} className='h-full'
 allowFullScreen="" loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Map;
