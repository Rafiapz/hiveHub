import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit'
import { createPostAction, fetchAllposts } from '../../actions/post/postActions'



const initialState={

    posts:{
        loading:false,
        data:null,
        error:null
    },
    createPostModal:{
        isOpen:false
    }
}

const postSlice=createSlice({
    
    name:'posts',
    initialState:initialState,
    reducers:{
        handleCreatePostModal:(state)=>{
            state.createPostModal.isOpen=!state.createPostModal.isOpen                 
        },
    },

    extraReducers:(builder)=>{

        builder
        .addCase(fetchAllposts.pending,(state)=>{
            state.posts.loading=true
        })
        .addCase(fetchAllposts.fulfilled,(state,action)=>{
            state.posts.loading=false;
            state.posts.data=action.payload.posts
        })
        .addCase(fetchAllposts.rejected,(state)=>{
            state.posts.loading=false;
            state.posts.data=null;           
        })
        .addCase(createPostAction.fulfilled,(state)=>{
            state.createPostModal.isOpen=false
        })
    }
})


export const {handleCreatePostModal} =postSlice.actions

export default postSlice.reducer    