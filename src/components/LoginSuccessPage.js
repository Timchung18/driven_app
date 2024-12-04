import React from "react";
import Footer from "./Footer";
import SignInLogoWhiteBars from "./SignInLogo-WhiteBars";
import ArrowButton from "./ArrowButton"; // Assuming you have an ArrowButton component

const LoginSuccessPage = () => {
  return (
    <div className="min-h-screen bg-[#00FFAA] flex flex-col justify-between px-6">
      {/* Top Section */}
      <div className="mt-6">
        {/* Logo */}
        <SignInLogoWhiteBars />

        {/* Main Content */}
        <div className="mt-8 text-black">
          <div className="mt-4">
            <h2 className="text-lg font-semibold flex items-center">
              <span className="mr-2">🔍</span> How do we find your tickets?
            </h2>
            <p className="mt-2 text-sm">
              We constantly scrape government databases to ensure you never miss
              a citation.
            </p>
          </div>
        </div>

        {/* Available Locations */}
        <div className="mt-8 text-black">
          <h3 className="text-lg font-bold uppercase border-b-4 border-white pb-2">
            Available Locations
          </h3>
          <p className="mt-2 text-sm">
            We currently serve the following cities, but are rapidly working to
            expand our serviced areas.
          </p>
          <div className="grid grid-cols-2 gap-y-2 mt-4 font-semibold">
            <p>New York, NY</p>
            <p>Stamford, CN</p>
            <p>Long Island, NY</p>
            <p>Hoboken, NJ</p>
            <p>Bridgeport, CA</p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />

      {/* Find My Tickets Button */}
      <div className="mt-8 mb-6 flex justify-center relative">
        {/* Black Button */}
        <button className="bg-black text-white font-bold text-lg w-full py-3 rounded-lg">
          Find My Tickets
        </button>
        {/* Arrow Button */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
          <ArrowButton
            size="35px"
            arrowColor="#121212"
            backgroundColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginSuccessPage;
