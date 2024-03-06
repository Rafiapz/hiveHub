import {IDependencies} from '../interfaces/IDependencies'
import {UserEntity} from '../../domain/entities'

export const verifyUserUseCase =(dependencies:IDependencies)=>{
           
    const {repositories:{verify}}=dependencies

    return {
        execute:async (data:UserEntity)=>{
            try {
                return await verify(data)
            } catch (error:any) {
                throw new Error (error.message || 'user creation failled')
            }
        }
    }
}