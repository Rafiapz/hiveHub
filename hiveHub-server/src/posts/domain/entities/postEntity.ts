import {ObjectId} from 'mongoose'

export interface PostEntity{

    _id?:ObjectId;
    userId:ObjectId;
    content?:string;
    image?:string;
    video?:string;
    createdAt:Date;
}