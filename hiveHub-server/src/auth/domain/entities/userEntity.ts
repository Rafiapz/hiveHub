import {ObjectId} from 'mongoose'

interface connctions{

    connectionId:ObjectId;
    userId:ObjectId
}

export interface UserEntity{
    fullName:string,
    profilePhoto?:string,
    coverPhoto? :string,
    email:string,
    password:string,
    username:string,
    role:string,
    isActive:boolean 
    connections:connctions[]
}