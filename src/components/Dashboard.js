import React from "react";
import Footer from "./Footer";
import SignInLogoWhiteBars from "./SignInLogo-WhiteBars"; // Use your logo component
import ArrowButton from "./ArrowButton"; // Assuming this component exists

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Header */}
      <div className="flex justify-between items-center px-6 pt-6">
        <SignInLogoWhiteBars /> {/* Logo */}
        <div>
          <button
            className="p-2 border border-gray-300 rounded-full flex items-center justify-center"
            aria-label="Profile Icon"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-black"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 mt-6">
        {/* Find Your Tickets Section */}
        <div className="border border-gray-300 rounded-lg shadow-md p-4">
          <div className="flex items-start gap-4">
            <div className="bg-orange-500 w-2 rounded"></div>
            <div>
              <h2 className="text-orange-500 font-bold uppercase text-sm">
                Get Started
              </h2>
              <h3 className="text-2xl font-bold">Find Your Tickets</h3>
              <p className="text-gray-600 text-sm mt-2">
                Share your driver info to find any outstanding tickets or get
                notified about new tickets.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button className="bg-black text-white flex items-center justify-center px-6 py-2 rounded-lg">
              Get Started
              <span className="ml-2">
                <ArrowButton
                  size="20px"
                  arrowColor="#121212"
                  backgroundColor="#FFFFFF"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Drive Now, Pay Later Section */}
        <div className="mt-8">
          <h2 className="text-sm font-bold uppercase text-gray-500">
            Get a Driven Card
          </h2>
          <h3 className="text-2xl font-bold mt-2">Drive Now, Pay Later.</h3>
          <div className="bg-[#00FFAA] rounded-lg p-6 mt-4 flex items-center justify-between">
            <div>
              <h4 className="text-black font-bold">Your Name Here</h4>
            </div>
            <div className="h-24 w-40 bg-green-300 rounded"></div>
          </div>
          <p className="text-gray-600 text-sm mt-4">
            Lorem ipsum dolor sit amet consectetur. Iaculis vitae ac tellus orci
            vestibulum. Scelerisque mattis in morbi id id.
          </p>
        </div>

        {/* How Driven Works Section */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold">How Driven Works</h3>
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur. Semper scelerisque faucibus
            et at ut viverra.
          </p>
          <button className="bg-[#00FFAA] text-black font-bold text-sm px-6 py-2 mt-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Dashboard;
