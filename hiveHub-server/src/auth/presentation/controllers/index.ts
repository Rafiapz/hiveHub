import { IDependencies } from "../../application/interfaces/IDependencies";
import { loginController } from "./login";
import { signupController } from "./signup";
import { verifyController } from "./verifyAccount";



export const controllers=(dependancies:IDependencies)=>{

    return {
        signup:signupController(dependancies),
        verify:verifyController(dependancies),
        login:loginController(dependancies),
        
    }
}