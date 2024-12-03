import React from 'react';

import logo from '../assets/drivenLogo.png';

const Footer = () => {
  return (
    <div className="flex justify-between items-start mt-16">
      <img src={logo} alt="Driven Logo" className="w-24 mt-1" />
      <div className="text-gray-500 flex flex-col items-end gap-2 text-sm w-[194px] h-[85px] opacity-100">
        <p className="font-montserrat text-sm font-normal leading-[19.6px] tracking-[0.015em] text-left">About Us</p>
        <p className="font-montserrat text-sm font-normal leading-[19.6px] tracking-[0.015em] text-left">Contact</p>
        <p className="font-montserrat text-sm font-normal leading-[19.6px] tracking-[0.015em] text-left">Terms</p>
        <p className="font-montserrat text-sm font-normal leading-[19.6px] tracking-[0.015em] text-left">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
