import React from 'react';
import Footer from '../Footer';
import ArrowButton from '../ArrowButton'; // Import the new ArrowButton component
import CombinedLogo from '../SignInLogo-GreenBars';
const AccountCreation = () => {
  return (
    <div className="bg-white w-full min-h-screen mx-auto p-6 font-sans mb-8">
      <div className="relative flex flex-col items-start w-full h-[300px] mx-auto">
        {/* Signin Logo Component */}
        <CombinedLogo />
      </div>

      {/* Account Creation Section */}
      <div className="mt-8 mb-8">
        <h2 className="w-[260px] h-[28px] font-montserrat text-[20px] font-semibold leading-[28px] text-left text-[#121212]">
          Create Your Account
        </h2>

        <div className="flex items-center w-[335px] h-[55px] min-h-[55px] p-[10px] gap-2 rounded-tl-[7.5px] bg-[#12121206]">
          <input
            type="text"
            placeholder="Enter your phone number"
            className="flex-grow outline-none bg-transparent text-sm "
          />
          <ArrowButton
            size="35px"
            arrowColor="#121212"
            backgroundColor="#FFFFFF"
          />
        </div>

        <button className="w-full bg-black text-white rounded-lg py-3 flex items-center justify-center mt-4">
          <span className="mr-2">🔒</span> Continue
        </button>
        <p className="text-gray-500 text-sm mt-4">
          We’ll send you a verification code via SMS.
        </p>
        <p className="text-gray-500 text-sm mt-4">
          By continuing, I agree to Driven’s{' '}
          <a href="#" className="text-blue-500">
            Terms of Service
          </a>{' '}
          and authorize Driven to obtain, use, and share consumer reports about
          me. See our{' '}
          <a href="#" className="text-blue-500">
            Privacy Policy
          </a>{' '}
          to learn more about our privacy practices.
        </p>
      </div>

      {/* How It Works Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold">HOW IT WORKS</h3>
        <div className="w-10 mt-1 mb-6"></div>
        <div className="flex items-start mb-6">
          <div className="mr-4 text-2xl">⚪</div>
          <div>
            <h4 className="text-md font-semibold">Find Your Tickets</h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Elit erat eget ligula id
              nascetur elit.
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="mr-4 text-2xl">⚪</div>
          <div>
            <h4 className="text-md font-semibold">Drive Now, Pay Later</h4>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur. Elit erat eget ligula id
              nascetur elit.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AccountCreation;
