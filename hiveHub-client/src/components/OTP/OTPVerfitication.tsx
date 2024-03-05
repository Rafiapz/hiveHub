import React from "react";
import { useState } from "react";
import OtpInput from "react-otp-input";
import CountDownTimer from "../CountDownTimer/CountDownTimer";

function OTPVerfitication() {
  const [otp, setOtp] = useState("");
  const handleChange = (otp:string) => {
    setOtp(otp);
  };
  return (
    <div className="mt-40 ml-36 max-w-lg mx-auto">
    <div className="mb-6">
      <h3 className="text-gray-700">
        Please check your email inbox, including the spam folder, for the OTP. Once received, kindly submit it for verification. Thank you for your cooperation!
      </h3>
    </div>
    <h2 className="text-3xl font-bold mb-4 ml-6">Enter OTP</h2>
    <div className="flex items-center ">
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={4}
        renderSeparator={<span> - </span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          border: '2px solid black',
          borderRadius: '8px',
          width: '54px',
          height: '54px',
          fontSize: '20px',
          color: 'black',
          fontWeight: '400',
          caretColor: '#ffffff',
          backgroundColor: 'transparent',
          textTransform: 'uppercase',
        }}
        shouldAutoFocus
      />
      <button
        // onClick={handleVerify}
        className="ml-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-md"
      >
        Verify
      </button>
    </div>
    <div className="flex items-center justify-center mt-4 mr-32">
      <CountDownTimer/>
    </div>
  </div>
  
  );
}

export default OTPVerfitication;
