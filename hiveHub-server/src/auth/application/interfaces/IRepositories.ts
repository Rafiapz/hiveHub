import {UserEntity} from '../../domain/entities/userEntity'

export interface IRepositories{
    create:(data:UserEntity)=>Promise<UserEntity|null>;
    verify:(data:UserEntity)=>Promise<UserEntity|null>
}