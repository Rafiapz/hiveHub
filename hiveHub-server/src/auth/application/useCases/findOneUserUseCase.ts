import { UserEntity } from "../../domain/entities";
import { IDependencies } from "../interfaces/IDependencies";

export const findOneUserUseCase=(dependencies:IDependencies)=>{

    const {repositories:{findOne}}=dependencies

    return {
        execute:async (data:UserEntity)=>{
            return await findOne(data)
        }
    }
}