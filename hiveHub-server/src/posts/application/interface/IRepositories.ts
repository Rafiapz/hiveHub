import { DeleteResult, ObjectId } from "mongodb";
import { PostEntity } from "../../domain/entities"

export interface IRepositories{

    create:(data:PostEntity)=>Promise<PostEntity|null>;
    findAllPosts:()=>any;
    deletePost:(data:{_id:string})=>Promise<DeleteResult>
}