import {createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name:'user',
    initialState:{
        loading:false,
        data:null,
        error:null
    },
    reducers:{
        setTrue:(state,action)=>{
            state.loading=true
        },
        setFalse:(state)=>{
            state.loading=false
        }
    }
})

export const {setTrue,setFalse} =userSlice.actions

export default userSlice.reducer