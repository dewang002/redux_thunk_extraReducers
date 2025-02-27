import { createSlice } from "@reduxjs/toolkit";
import {fetchUser} from '../thunk/userThunk'

const userSlice = createSlice({
    name:'user',
    initialState:{
        value:null,
        loading:false,
        error:null
    },
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase( fetchUser.pending, ( state ) => { state.loading = true })
        .addCase( fetchUser.fulfilled, ( state, action ) => {
            state.loading = false
            state.value = action.payload
        })
        .addCase( fetchUser.rejected, ( state, action ) => {
            state.loading = false
            state.error = action.payload;
        })
    }
})

export default userSlice.reducer;