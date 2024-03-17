import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit'
import { fetchuser, loginAction, loginWithGoogle, logoutAction, otpVerification } from '../../actions/auth/userActions'

const initialState={

    user:{
        auth:{
            isAuth:false,
            role:''
        },
        loading:false,
        data:null

    },
    

}

const userSlice=createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
                
    },
    extraReducers:(builder)=>{
        builder
        .addCase(otpVerification.fulfilled,(state,action)=>{
            if(action.payload.status==='ok'){                               
                state.user.auth.isAuth=true
                state.user.auth.role=action.payload.userData.role
                state.user.data=action.payload.userData
            }
        })
        .addCase(loginAction.fulfilled,(state,action)=>{
            if(action.payload.status==='ok'){             
                state.user.auth.isAuth=true
                state.user.data=action?.payload?.userData
                state.user.auth.role=action?.payload?.role                         
                state.user.auth.role=action?.payload?.userData?.role
            }
        })
        .addCase(fetchuser.fulfilled,(state,action)=>{
            if(action.payload.status==='ok'){
            state.user.auth.isAuth=true
            state.user.auth.role='user'
            }
        })
        .addCase(fetchuser.rejected,(state)=>{
            state.user.auth.isAuth=false
        })
        .addCase(loginWithGoogle.fulfilled,(state)=>{
            state.user.auth.isAuth=true
            state.user.auth.role='user'
        })
        .addCase(logoutAction.fulfilled,(state,action)=>{
            if(action?.payload?.status==='ok'){
            state.user.auth.isAuth=false
            }
        })
    }
   
})

export const {} =userSlice.actions

export default userSlice.reducer