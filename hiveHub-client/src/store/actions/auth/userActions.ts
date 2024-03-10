import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IUserSignupdata} from '../../../interfaces/IUserSignup'
import { IOtp } from "../../../interfaces/IOtp";
import { IUserLogin } from "../../../interfaces/IUserLogin";
axios.defaults.baseURL='http://localhost:7700'

export const signupAction=createAsyncThunk( '/signup',async (userCredentials:IUserSignupdata,{rejectWithValue})=>{   
        try {
            const response=await axios.post('/auth/signup',userCredentials,{
                headers:{"Content-Type":"application/json"},
                withCredentials:true
            })

            console.log(response);
            return response.data
            
        } catch (error:any) {
            throw new Error (error.message)
        }
    }
)

export const otpVerification=createAsyncThunk('/otp-verification',async (data:IOtp,{rejectWithValue})=>{

    try {

        const response=await axios.post('/auth/otp-verification',data)
        console.log(response);
        localStorage.setItem('token',response.data.token)
        return response.data
        
        
    } catch (error:any) {
        throw new Error (error.message)
    }
})

export const resendOtpAction=createAsyncThunk('/resend-otp',async (email:string|null)=>{

    try {

        const response=await axios.get(`/auth/resend-otp?email=${email}`)
        console.log(response);
        
        return response.data
        
        
    } catch (error:any) {
        throw new Error (error.message)
    }
})



export const loginAction=createAsyncThunk('/login',async (data:IUserLogin)=>{

    try {
            
        const response=await axios.post('/auth/login',data)
        console.log(response);
        if(response.data.status==='ok'){
            localStorage.setItem('token',response.data.token)
            
        }
        
        return response.data
    } catch (error:any) {
        throw new Error(error.message)
    }
})

export const fetchuser=createAsyncThunk('/auth/fetch',async ()=>{

    try {

               
        const token=localStorage.getItem('token')
        if(!token){
            throw new Error ('Token not found')
        }
        const response=await axios.get('/auth/fetch-user',{headers:{Authorization:token}})
        console.log(response);
        if(response.data.status!=='ok'){
            throw new Error('Not authorized')
        }
        
        
    } catch (error:any) {
        throw new Error(error.message)
    }
})

export const loginWithGoogle=createAsyncThunk('/auth/google',async ()=>{

    try {

        const response=await axios.get('/auth/google')

        console.log(response.data);
        
        
    } catch (error:any) {
        throw new Error(error.message)
    }
})