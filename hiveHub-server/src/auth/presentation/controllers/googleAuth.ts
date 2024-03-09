import { comparePassword } from "../../../_lib/bcrypt";
import { genereateToken } from "../../../_lib/jwt";
import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction} from 'express'


export const googleAuthController=(dependencies:IDependencies)=>{

    const {useCases:{findOneUserUseCase}}=dependencies

    return async (req:Request,res:Response)=>{

        try {
            
        } catch (error) {
            
        }

    }


}