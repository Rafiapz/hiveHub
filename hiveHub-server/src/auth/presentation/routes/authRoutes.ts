import {Router} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { controllers } from '../controllers'



export const authRoutes=(dependencies:IDependencies)=>{    
        
    const {signup,verify}=controllers(dependencies)

    const router=Router()

    router.route('/signup').post(signup)

    router.route('/verify').post(verify)

    return router
}