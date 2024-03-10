import { IPostDependencies } from "../../application/interface/IDependencies";
import { Request, Response, NextFunction } from 'express'
import { PostEntity } from "../../domain/entities";
import { getTokenPayloads } from "../../../_lib/jwt";

export const createPostController = (dependencies: IPostDependencies) => {

    const { postUseCases: { createPostUseCase } } = dependencies

    return async (req: Request, res: Response) => {

        try {

            
            
            const token: string | undefined = req.headers.authorization
            if (token) {
                const decoded =getTokenPayloads(token)
                
                if(decoded){
                const data: PostEntity = {
                    createdAt: new Date(),
                    userId:decoded.id,
                    media:req?.file?.filename,
                    content:req?.body?.content
                    
                }
               
                createPostUseCase(dependencies).execute(data)

                res.json({status:'success'})

                }

                
            }


           


        } catch (error) {
            console.log(error);

        }
    }
}