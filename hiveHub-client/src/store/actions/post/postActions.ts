import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
axios.defaults.baseURL = 'http://localhost:7700'

export const createPostAction = createAsyncThunk('/post/create', async (form: any) => {

    try {

        const token = localStorage.getItem('token')

        if (token) {
            const response = await axios.post('/post/create-post', form, { headers: { Authorization: token } })
            console.log(response);
        }


    } catch (error) {
        console.log(error);

    }
})

export const fetchAllposts=createAsyncThunk('/post/fetch-all-posts',async()=>{

    try {

        const response=await axios.get('/post/fetch-all-posts')
        
        return response.data
        
    } catch (error) {
        console.log(error);
        
    }
})