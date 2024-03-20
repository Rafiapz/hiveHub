import { IPostDependencies } from "../../application/interface/IDependencies"
import { createPostController } from "./createPostController"
import { fetchAllposts } from "./fetchAllposts"
import { deletePostController } from './deletePost'

export const controllers=(dependencies:IPostDependencies)=>{

    return {
       createPost:createPostController(dependencies),
       fetchAllPosts:fetchAllposts(dependencies),
       deletePost:deletePostController(dependencies)
       
    }
}