import React, { useState } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { signupSchema } from "../../../schemas/SignupSchema";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function Signup() {
  const initialValues = {
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
  const togglePasswordVisibility = (): void => {
    setShowPassword(!showPassword)
  }
  const toggleConfirmPasswordVisibility = (): void => {
    setShowConfirmPassword(!showConfirmPassword)
  }
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex w-full  overflow-auto">
      <div className="w-1/2">
        <img src="images/front-image.png" className="mt-24 ml-12" alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-3xl font-bold text-pink-500 mb-1 ml-8 mt-8">Sign Up</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={signupSchema}
        >
          {() => (
            <Form className=" pt-8 pl-8 pr-8 w-full max-w-md">
              <div className="flex flex-col mb-4">
                <label htmlFor="fullName" className="text-black mb-2">
                  Full Name
                </label>
                <Field
                  name="fullName"
                  type="text"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2"
                />
                <ErrorMessage
                  className="text-red-700"
                  name="fullName"
                  component="span"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="username" className="text-black mb-2">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2"
                />
                <ErrorMessage
                  className="text-red-700"
                  name="username"
                  component="span"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-black mb-2">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full bg-gray-200 rounded-lg px-4 py-2"
                />
                <ErrorMessage
                  className="text-red-700"
                  name="email"
                  component="span"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="password" className="text-black mb-2">
                  Password
                </label>

                <div className="relative">
                  <Field
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="w-full bg-gray-200 rounded-lg px-4 py-2"
                    
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 px-4 py-2"
                  >
                    {!showPassword ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}
                  </button>
                </div>
                <ErrorMessage
                  className="text-red-700"
                  name="password"
                  component="span"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="confirmPassword" className="text-black mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Field
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    className="w-full bg-gray-200 rounded-lg px-4 py-2"
                  />
                  <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute inset-y-0 right-0 px-4 py-2"
                  >
                    {!showConfirmPassword ? (<FontAwesomeIcon icon={faEye} />) : (<FontAwesomeIcon icon={faEyeSlash} />)}
                  </button>
                </div>
                <ErrorMessage
                  className="text-red-700"
                  name="confirmPassword"
                  component="span"
                />
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-4 rounded-lg mb-4"
              >
                Sign Up
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-black mb-4 ml-8">
          Already have an account?{" "}
          <a href="#" className="text-blue-800">
            Login
          </a>
        </p>
        <div className="flex justify-center items-center ml-8">
          <button className="bg-red-600 text-white py-2 px-4 rounded-lg mr-4">
            Login with Google
          </button>
          <button className="bg-blue-700 text-white py-2 px-4 rounded-lg">
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
