import {ObjectId} from 'mongoose'

export interface PostEntity{

    _id?:ObjectId;
    userId:ObjectId;
    content?:string;
    media?:string;
    createdAt:Date;
}