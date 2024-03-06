import {User} from '../models'
import {UserEntity} from '../../../domain/entities/userEntity'

export const verify =async (data: UserEntity): Promise<UserEntity | null > =>{

    try {

        const status=await User.findByIdAndUpdate({email:data.email},{otp:data.otp,isVerified:true})

        if(!status){
            throw new Error ('User updation failed')
        }

        return status
        
    } catch (error) {
        console.log(error);
        
        throw new Error('User creation failed')
    }
}