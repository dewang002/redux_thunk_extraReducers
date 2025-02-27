import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUser = createAsyncThunk('user/fetchUser', async (_,{rejectWithValue}) => {
    try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users/')
        return res.data
    }catch (error) {
        return rejectWithValue("something went wrong")
    }
})