import { comparePassword } from "../../../_lib/bcrypt";
import { genereateToken } from "../../../_lib/jwt";
import { IDependencies } from "../../application/interfaces/IDependencies";
import {Request,Response,NextFunction} from 'express'


export const loginController=(dependencies:IDependencies)=>{

    const {useCases:{findOneUserUseCase}}=dependencies

    return async (req:Request,res:Response)=>{
        try {

           
          const user=await findOneUserUseCase(dependencies).execute(req.body)
            
          if(!user){
            res.json({status:'failed',message:'Invalid email or password'}).status(400)
          }else{

             const status=await comparePassword(req?.body?.password,user?.password)

             if(status){
              const token= genereateToken({id:user?._id})

              res.json({status:'ok',message:'success',token,role:user.role}).status(200)
             }else{

                res.json({status:'failed',message:'Invalid email or password'}).status(200)
             }
          }        

          
            
        } catch (error:any) {
            res.json({status:'failed',message:error.message}).status(400)
        }
    }

}