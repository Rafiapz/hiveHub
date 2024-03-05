import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupController } from "./signup";


export const controllers=(dependancies:IDependencies)=>{

    return {
        signup:signupController(dependancies)
    }
}