import React, { useState } from "react";
import Countdown from "react-countdown";

function CountDownTimer() {
  const Completionist = () => (
    <span className="text-blue-500 cursor-pointer mr-32">Didn't get OTP? Resend</span>
  );

  // Renderer callback with condition
  const renderer = ({  minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span className="inline-block bg-gray-200 px-2 mr-32 rounded-md text-gray-800">
          {minutes < 10 ? `0${minutes}` : minutes}:
          {seconds < 10 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };
  return <Countdown date={Date.now() + 10000} renderer={renderer} />;
}

export default React.memo(CountDownTimer);
