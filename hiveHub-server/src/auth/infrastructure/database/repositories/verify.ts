import {User} from '../models'
import {UserEntity} from '../../../domain/entities/userEntity'

export const verify =async (data:{email:string,otp:string}) =>{
  

    try {

        const orginalOtp=await User.findOne({email:data.email},{otp:1})

       
        if(orginalOtp?.otp!==data.otp){
            throw new Error ('Incorrect otp')
        }
        

        const user=await User.findOneAndUpdate({email:data.email,otp:data.otp},{isVerified:true,otp:''})        
        

        if(!user){
            throw new Error ('User updation failed')
        }

        const status=await User.findOne({email:data.email},{isVerified:1})
        
        
        if(!status?.isVerified){
            throw new Error ('User not verified')
        }

        return user
        
    } catch (error:any) {
        console.log(error);
        
        throw new Error(error.message)
    }
}