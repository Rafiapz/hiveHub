import { IPostDependencies } from "../../application/interface/IDependencies"
import { createPostController } from "./createPostController"
import { fetchAllposts } from "./fetchAllposts"

export const controllers:any=(dependencies:IPostDependencies)=>{

    return {
       createPost:createPostController(dependencies),
       fetchAllposts:fetchAllposts(dependencies),
       
    }
}