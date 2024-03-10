import {UserEntity} from '../../domain/entities/userEntity'

export interface IRepositories{
    create:(data:UserEntity)=>Promise<UserEntity|null>;
    verify:(data:UserEntity)=>Promise<UserEntity|null>;
    findOne:(data:UserEntity)=>Promise<UserEntity|null>;
    updateOne:(query:{email:string},data:any)=>Promise<UserEntity|null>;
}