import { genereateToken } from "../../../_lib/jwt";
import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction} from 'express'


export const verifyController=(dependancies:IDependencies)=>{

    const {useCases:{verifyUserUseCase}}=dependancies

    return async (req:Request,res:Response,next:NextFunction)=>{

        try {

            console.log(req.body);
            const data=req.body
            if(!data.email|| !data.otp){
                throw new Error('verification failed')            
            }

           const user= await verifyUserUseCase(dependancies).execute(data)
        
           if(user){
            const token=genereateToken({id:user.email})
            res.json({status:'ok',token,role:user.role}).status(200)
           }
            
            
        } catch (error:any) {            
            
            res.json({status:'failed',message:error.message}).status(400)
            
        }

    }
}