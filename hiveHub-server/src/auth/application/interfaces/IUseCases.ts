import { ICreateUserUseCase } from "../../domain/useCase";
import { IVerifyUserUseCase } from "../../domain/useCase";

export interface IUseCases{
    createUserUseCase:(dependencies:any)=>ICreateUserUseCase;
    verifyUserUseCase:(dependencies:any)=>IVerifyUserUseCase
}