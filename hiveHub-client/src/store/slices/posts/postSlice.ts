import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit'
import { fetchAllposts } from '../../actions/post/postActions'



const initialState={

    posts:{
        loading:false,
        data:null,
        error:null
    }
}

const postSlice=createSlice({
    
    name:'posts',
    initialState:initialState,
    reducers:{

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
    }
})


export const {} =postSlice.actions

export default postSlice.reducer