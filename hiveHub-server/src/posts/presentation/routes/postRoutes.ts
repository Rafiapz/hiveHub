
import {Router} from 'express'
import { controllers } from '../controllers'
import { IPostDependencies } from '../../application/interface/IDependencies'
import { upload } from '../../../_lib/multer'
import { auth } from '../../../auth/presentation/controllers/isAuthorized'



export const postRoutes=(dependencies:IPostDependencies)=>{    
        
    const {createPost,fetchAllposts}=controllers(dependencies)

    const router=Router()

    router.route('/create-post').post(auth,upload.single('image'),createPost)

    router.route('/fetch-all-posts').get(fetchAllposts)

    

    

    return router
}