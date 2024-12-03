import React from 'react';
import Footer from '../Footer';
import ArrowButton from '../ArrowButton'; // Import the new ArrowButton component
import CombinedLogo from '../SignInLogo-WhiteBars';

const InputEmailPass = () => {
  return (
    <div className=" bg-[#00FFAA] w-full min-h-screen mx-auto p-6 font-montserrat mb-8">
      <div className="w-full h-[300px] ">
        {/* Signin Logo Component */}
        <CombinedLogo className="absolute left-0 top-0 transform translate-x-[10rem]"/>
      </div>

      {/* Account Creation Section */}
      <div className="mb-2">
        <h2 className="w-[260px] h-[28px] text-[20px] font-bold leading-[28px] text-left text-[#121212]">
          Create Your Account
        </h2>
      </div>

      
      <div className="text-black text-lg mb-4">
        123-456-7890
      </div>
      <div className="flex items-center w-full h-[55px] min-h-[55px] p-[10px] gap-2 rounded-md bg-[#00FFAA] shadow-md mb-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow outline-none text-sm bg-transparent text-black placeholder-gray-600"
        />
      </div>
      <div className="flex items-center w-full h-[55px] min-h-[55px] p-[10px] gap-2 rounded-md bg-[#00FFAA] shadow-md mb-6">
        <input
          type="password"
          placeholder="Enter a password"
          className="flex-grow outline-none text-sm bg-transparent text-black placeholder-gray-600"
        />
        <ArrowButton
          size="35px"
          arrowColor="#121212"
          backgroundColor="#FFFFFF"
        />
      </div>
      <button className="text-black font-bold mb-10">BACK</button>



      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default InputEmailPass;
