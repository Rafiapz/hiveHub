import React, { useEffect, useRef, useState } from "react";
import Countdown from "react-countdown";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

interface ChildProps {
  timer: number;
  setTimer: React.Dispatch<React.SetStateAction<number>>;
}

const  CountDownTimer: React.FC<ChildProps>=({timer,setTimer})=> {

  const intervalRef = useRef<any>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const decreaseTime = () => {
      if (timer > 0) {
          setTimer((prev:number) => prev - 1)
      } else {
          clearInterval(intervalRef.current);
          localStorage.removeItem('timer');
      }
  };

  useEffect(() => {
      localStorage.setItem('timer', timer.toString());
      intervalRef.current = setInterval(decreaseTime, 1000);
      return () => { clearInterval(intervalRef.current) };
  }, [timer]);

  const formatTime = (seconds:number) => {

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    return formattedTime;

      
  };

  const handleResendOtp = () => {
      // dispatch(sendOtp(email)).then(() => {
      //     setTime(120);
      // })
  }
  return (
      <>
      {timer > 0 ? (
          <h2 className='my-4 text-start text-sm font-medium text-black'>{formatTime(timer)}</h2>
      ) : (
          // <h2 className='my-4 text-white text-start text-sm font-extralight'>Don't get the OTP ?
          //     <span onClick={handleResendOtp} className='font-medium cursor-pointer'> asdasdfResend Otp</span>
          // </h2>
               <span className="text-blue-500 cursor-pointer mr-32">
       Didn't get OTP? Resend
     </span>
      )}
      </>
  )


  // const Completionist = () => (
    // <span className="text-blue-500 cursor-pointer mr-32">
    //   Didn't get OTP? Resend
    // </span>
  // );

  

  // const renderer = ({ minutes, seconds, completed }:any) => {
  //   if (completed) {
  //     return <Completionist />;
  //   } else {
  //     return (
  //       <span className="inline-block bg-gray-200 px-2 mr-32 rounded-md text-gray-800">
  //         {minutes < 10 ? `0${minutes}` : minutes}:
  //         {seconds < 10 ? `0${seconds}` : seconds}
  //       </span>
  //     );
  //   }
  // };
  // return <Countdown date={Date.now()+10000} renderer={renderer} />;
}

export default React.memo(CountDownTimer)
