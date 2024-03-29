import { IPostDependencies } from "../../application/interface/IDependencies";
import { Request, Response, NextFunction } from 'express'
import { PostEntity } from "../../domain/entities";
import { getTokenPayloads } from "../../../_lib/jwt";

export const createPostController = (dependencies: IPostDependencies) => {

    const { postUseCases: { createPostUseCase } } = dependencies

    return async (req: Request, res: Response) => {

        try {

            console.log(req.file?.filename);


            const token: string | undefined = req.cookies.user_token
            if (token) {
                const decoded = getTokenPayloads(token)
                const path = `http://localhost:7700/posts/${req?.file?.filename}`
               

                if (decoded) {
                    const mediaType=req.params.type
                    console.log(req.params);
                    
                    const data: PostEntity = {
                        createdAt: new Date(),
                        userId: decoded.id,
                        media:mediaType?{type:mediaType,path:path}:undefined,
                        content: req?.body?.content

                    }

                    const post = await createPostUseCase(dependencies).execute(data)

                    if (post) {
                        res.json({ status: 'ok', postData: post,message:'Your post has been successfully submitted!' })
                    } else {
                        throw new Error('Failed to create post')
                    }

                                     

                }

            }else{
                throw new Error('Something went wrong')
            }


        } catch (error:any) {
            console.log(error);
            res.json({status:'failed',message:error.message}).status(500)
            //send proper error message
        }
    }
}