import { Schema, model } from 'mongoose'
import { UserEntity } from '../../../domain/entities/userEntity'

const userSchema = new Schema({

    fullName: { type: String, required: true },
    coverPhoto: { type: String },
    profilePhoto: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true },
    role: { type: String, required: true },
    connections: [{
        ConnectionId: { type: Schema.Types.ObjectId },
        UserId: { type: Schema.Types.ObjectId },
    }],
    isActive: { type: Boolean, required: true },
})

export const User=model<UserEntity>('users',userSchema)