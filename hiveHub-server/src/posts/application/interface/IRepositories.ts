import { PostEntity } from "../../domain/entities"

export interface IRepositories{

    create:(data:PostEntity)=>Promise<PostEntity|null>;
    findAllPosts:()=>any
}