
import {Router} from 'express'
import { controllers } from '../controllers'
import { IPostDependencies } from '../../application/interface/IDependencies'
import { upload } from '../../../_lib/multer'



export const postRoutes=(dependencies:IPostDependencies)=>{    
        
    const {createPost,fetchAllposts}=controllers(dependencies)

    const router=Router()

    router.route('/create-post').post(upload.single('image'),createPost)

    router.route('/fetch-all-posts').get(fetchAllposts)

    

    

    return router
}