import { IDependencies } from "../../application/interfaces/IDependencies";
import { signupController } from "./signup";
import { verifyController } from "./verifyAccount";



export const controllers=(dependancies:IDependencies)=>{

    return {
        signup:signupController(dependancies),
        verify:verifyController(dependancies)
    }
}