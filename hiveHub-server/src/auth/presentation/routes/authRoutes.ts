import {Router} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { controllers } from '../controllers'
import { isAuthorized } from '../controllers/isAuthorized'



export const authRoutes=(dependencies:IDependencies)=>{    
        
    const {signup,verify,login}=controllers(dependencies)

    const router=Router()

    router.route('/signup').post(signup)

    router.route('/otp-verification').post(verify)

    router.route('/login').post(login)

    router.route('/fetch-user').get(isAuthorized)

    return router
}