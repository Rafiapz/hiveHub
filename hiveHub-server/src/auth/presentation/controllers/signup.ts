import {Request,Response,NextFunction} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { passwordHashing } from '../../../_lib/bcrypt'
import { generateOtp } from '../../../_lib/otp'


export const signupController=(dependencies:IDependencies)=>{


        const {useCases:{createUserUseCase}}=dependencies

    return async (req:Request,res:Response)=>{

        try {
            
            let data=req.body
            data.isActive=true
            data.role='user'
            data.isVerified=false
            data.password=await passwordHashing(data.password)
            console.log(data);
            const otpDetails= generateOtp(data.email)
            const otp=otpDetails?.OTP
            data.otp=otp           
            
            createUserUseCase(dependencies).execute(data)

            res.status(200).json({status:'ok'})

        } catch (error) {
            console.log(error);
            
            
        }   
    }
}