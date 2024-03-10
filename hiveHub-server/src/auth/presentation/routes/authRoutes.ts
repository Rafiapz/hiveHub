import {Router} from 'express'
import { IDependencies } from '../../application/interfaces/IDependencies'
import { controllers } from '../controllers'
import { isAuthorized } from '../controllers/isAuthorized'
import passport from 'passport'
import '../../../_lib/passport'
import { genereateToken } from '../../../_lib/jwt'



export const authRoutes=(dependencies:IDependencies)=>{    
        
    const {signup,verify,login,updateOtp}=controllers(dependencies)

    const router=Router()

    router.route('/signup').post(signup)

    router.route('/otp-verification').post(verify)

    router.route('/login').post(login)

    router.route('/fetch-user').get(isAuthorized)

    router.route('/resend-otp').get(updateOtp)


    router.use(passport.initialize())
   
 

    router.get('/google',passport.authenticate("google",{scope:['profile','email']}))


    router.get('/google/callback', passport.authenticate('google',{successRedirect:'/auth/success',failureRedirect:'/auth/failure',session:false})
   
        
        
         
    )   


    router.get('/success',(req,res)=>{

           
        res.redirect('http://localhost:5173/signup')
    })

    router.get('/failure',(req,res)=>{
        console.log('called failure');
        
        res.send('failure')
    })

    return router
}