import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { loginSchema } from "../../../schemas/LoginSchemas";

function Login() {
    
    const initialValues={email:'',password:''}
    const handleSubmit=(values:any):void=>{
        console.log(values);
        
    }
    return (
        <div className="flex w-full  overflow-auto">
            <div className="w-1/2">
                <img src="images/front-image.png" className="mt-24 ml-12" alt="" />
            </div>
            <div className="w-1/2 flex flex-col justify-center items-start">
                <h2 className="text-3xl font-bold text-black mb-1 ml-8 text-pink-500">
                    Login
                </h2>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={loginSchema}>
                <Form className="p-8 w-full max-w-md">
                    <div className="flex flex-col mb-4">
                        <label htmlFor="email" className="text-black mb-2">
                            Email
                        </label>
                        <Field name={'email'} type='email' className="w-full bg-gray-200 rounded-lg px-4 py-2" />
                        <ErrorMessage name="email" className="text-red-700" component={'span'} />
                    </div>
                    <div className="flex flex-col mb-4">
                        <label htmlFor="password" className="text-black mb-2">
                            Password
                        </label>
                       <Field name={'password'} type='password' className="w-full bg-gray-200 rounded-lg px-4 py-2" />
                       <ErrorMessage name="password" className="text-red-700" component={'span'} />
                    </div>
                    <button
                        type="submit"
                        className="bg-pink-500 text-white py-2 px-4 rounded-lg mb-4"
                    >
                        Login
                    </button>
                </Form>
                </Formik>
                <p className="text-black mb-4 ml-8">
                    Don't have an account?{" "}
                    <a href="#" className="text-blue-800">
                        Sign Up
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

export default Login;
