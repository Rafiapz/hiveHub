import {Request,Response,NextFunction} from 'express'
import { verifyToken } from '../../../_lib/jwt';

export const isAuthorized=(req:Request,res:Response)=>{

    try {

        const token:string|undefined=req.headers.authorization
        if(token){
            const authorized=verifyToken(token) 

            if(authorized){
                res.json({status:'ok',message:'authorized'}).status(200)
            }else{
                res.json({status:'falied'}).status(200)
            }
        }
       
        
        
    } catch (error:any) {
        console.log(error.message);
        res.json({status:'failed',message:error.message}).status(500)
    }

}