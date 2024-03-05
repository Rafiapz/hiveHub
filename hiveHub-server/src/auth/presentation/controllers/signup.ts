import {Request,Response,NextFunction} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'


export const signupController=(dependencies:IDependencies)=>{


        const {useCases:{createUserUseCase}}=dependencies

    return async (req:Request,res:Response)=>{

        try {
            
            let data=req.body
            data.isActive=true
            data.role='user'
            console.log(data);
            
            // createUserUseCase(dependencies).execute(data)

            res.status(200).json({status:'ok'})

        } catch (error) {
            console.log(error);
            
            
        }   
    }
}