import {UserEntity} from '../../domain/entities'

export interface IFindOneUserUseCase{

    execute(data:UserEntity):Promise<UserEntity|null>;
}