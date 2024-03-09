import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit'
import { fetchuser, loginAction, otpVerification } from '../../actions/auth/userActions'

const initialState={

    user:{
        auth:{
            isAuth:false,
            role:'user'
        },
        loading:false,
        data:null

    },
    post:{

    },
    createPostModal:{
        isOpen:false
    }

}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        handleCreatePostModal:(state)=>{
            state.createPostModal.isOpen=!state.createPostModal.isOpen
        },
        logoutReducer:(state)=>{
            state.user.auth.isAuth=false
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(otpVerification.fulfilled,(state,action)=>{
            if(action.payload.status==='ok'){
                               
                state.user.auth.isAuth=true
                state.user.auth.role=action.payload.role
            }
        })
        .addCase(loginAction.fulfilled,(state,action)=>{
            if(action.payload.status==='ok'){
                console.log('this is',action.payload);
                state.user.auth.isAuth=true
                state.user.auth.role=action.payload.role
            }
        })
        .addCase(fetchuser.fulfilled,(state,action)=>{
            state.user.auth.isAuth=true
            state.user.auth.role='user'
        })
    }
   
})

export const {handleCreatePostModal,logoutReducer} =userSlice.actions

export default userSlice.reducer