import React from "react";

// SVG Component
const LetterLogo = () => (
  <svg
    width="89"
    height="89"
    viewBox="0 0 89 89"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto"
  >
    <path
      d="M0 44.3621C0 53.1361 2.60179 61.7131 7.47637 69.0084C12.3509 76.3037 19.2794 81.9897 27.3855 85.3474C35.4916 88.7051 44.4114 89.5836 53.0168 87.8719C61.6222 86.1601 69.5268 81.9351 75.7309 75.7309C81.9351 69.5268 86.1602 61.6222 87.8719 53.0168C89.5836 44.4114 88.7051 35.4916 85.3474 27.3855C81.9898 19.2794 76.3038 12.3509 69.0084 7.47637C61.7131 2.60179 53.1362 -1.04629e-07 44.3621 0V13.3086C50.504 13.3086 56.5078 15.1299 61.6146 18.5421C66.7213 21.9543 70.7015 26.8042 73.0518 32.4785C75.4022 38.1528 76.0172 44.3966 74.819 50.4204C73.6208 56.4442 70.6632 61.9774 66.3203 66.3203C61.9774 70.6632 56.4442 73.6208 50.4204 74.819C44.3966 76.0172 38.1528 75.4022 32.4785 73.0518C26.8042 70.7015 21.9543 66.7213 18.5421 61.6145C15.1299 56.5078 13.3086 50.5039 13.3086 44.3621H0Z"
      fill="#121212"
    />
    <path
      d="M44.3621 0H31.1342V61.592C32.6324 62.7333 34.2791 63.6831 36.0378 64.4116C38.6904 65.5103 41.5189 66.0729 44.3621 66.0833V0Z"
      fill="#121212"
    />
    <path
      d="M44.3621 75.4962C40.2887 75.4857 36.2358 74.682 32.4357 73.1079C31.9969 72.9262 31.5629 72.7348 31.1342 72.5339V77.7547H44.3621V75.4962Z"
      fill="#121212"
    />
  </svg>
);

// Main Component
const EnterVerifCode = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      {/* Logo */}
      <LetterLogo />

      {/* Header */}
      <div className="text-center mt-8">
        <h1 
          className="text-lg font-bold text-center"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 700,
            lineHeight: "16.8px",
            letterSpacing: "0.015em",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
            We just texted you
        </h1>
        <p 
          className="mt-2 text-gray-600"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "16.8px",
            letterSpacing: "0.015em",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Please enter the verification code sent to <br />
          (XXX) XXX-7890.
        </p>
      </div>

      {/* Input Field */}
      <div className="mt-4">
        <input
          type="text"
          maxLength="6"
          pattern="[0-9]*"
          className="w-full text-center text-3xl font-medium text-gray-500 tracking-widest  focus:outline-none focus:border-gray-700"
          placeholder="000000"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "26px",
            fontWeight: 400,
            lineHeight: "34px",
            letterSpacing: "0.015em",
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        />
      </div>
    </div>
  );
};

export default EnterVerifCode;
