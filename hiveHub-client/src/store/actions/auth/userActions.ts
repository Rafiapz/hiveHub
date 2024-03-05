import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {IUserSignupdata} from '../../../interfaces/IUserSignup'
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