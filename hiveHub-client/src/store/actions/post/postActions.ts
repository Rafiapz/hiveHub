import { createAsyncThunk } from "@reduxjs/toolkit"
import { CREATE_POST_URL, FETCH_ALL_POSTS_URL } from "../../../utils/endPoint"
import { jsonConfig, multiPartConfig } from "../../../utils/apiUtils"
import apiClient from "../../../utils/axios"


export const createPostAction = createAsyncThunk('/post/create', async (form: any,{rejectWithValue}) => {

    try {
        console.log(form);
        
        let params
        if(form.has('image'))
        params='image'
        else if(form.has('video'))
        params='video'
        console.log(params);
        
        const response = await apiClient.post(`${CREATE_POST_URL}/${params}`, form,multiPartConfig)
        console.log(response);

        return response.data
    } catch (error:any) {
        console.log(error);
        rejectWithValue(error.message)

    }
})

export const fetchAllposts = createAsyncThunk('/post/fetch-all-posts', async () => {

    try {

        const response = await apiClient.get(FETCH_ALL_POSTS_URL)
        console.log(response.data);
        
        return response.data

    } catch (error) {
        console.log(error);

    }
})