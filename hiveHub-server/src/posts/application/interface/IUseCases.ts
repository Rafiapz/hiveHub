import { PostEntity } from "../../domain/entities";
import { ICreatePostUseCase } from "../../domain/useCase/ICreatePostUseCase";
import { IFindAllPostsUseCase } from "../../domain/useCase/IFindAllPostUseCase";


export interface IUseCases{

    createPostUseCase:(dependencies:any)=>ICreatePostUseCase;
    findAllPostsUseCase:(dependencies:any)=>IFindAllPostsUseCase
}