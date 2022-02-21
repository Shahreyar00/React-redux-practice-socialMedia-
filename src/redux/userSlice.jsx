import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser2 = createAsyncThunk("users/update", async (user) => {
    const response = await axios.post(
        "http://localhost:8800/api/users/1/update",
        user
    );
    return response.data;
});

export const userSlice = createSlice({
    name: "user", 
    initialState:{
        // name:"john",
        // email:"john@gmail.com",
        userInfo:{
            name:"john",
            email:"john@gmail.com",
        },
        pending:null,
        error:null,
    },
    reducers:{
        // update:(state,action)=>{
        //     state.name = action.payload.name;
        //     state.email = action.payload.email;
        // },
        // remove:(state)=>(state={}),
        // addHello:(state,action)=>{
        //     state.name="Hello "+action.payload.name;
        // },
        
        //Custom reducer(apiCalls.jsx)
        // updateStart:(state)=>{
        //     state.pending = true;
        // },
        // updateSuccess:(state,action)=>{
        //     state.pending = false;
        //     state.userInfo = action.payload;
        // },
        // updateError:(state)=>{
        //     state.error = true;
        //     state.pending = false;
        // },
    },
    extraReducers:{
        [updateUser2.pending]:(state)=>{
            state.pending=true;
            state.error=false;
        },
        [updateUser2.fulfilled]:(state,action)=>{
            state.userInfo=action.payload;
            state.pending=false;
        },
        [updateUser2.rejected]:(state)=>{
            state.pending=false;
            state.error=true;
        },
    },
})

// export const { update, remove, addHello } = userSlice.actions;
export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
