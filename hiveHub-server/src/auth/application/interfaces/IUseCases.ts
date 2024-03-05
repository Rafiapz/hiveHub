import { ICreateUserUseCase } from "../../domain/useCase";

export interface IUseCases{
    createUserUseCase:(dependancies:any)=>ICreateUserUseCase
}