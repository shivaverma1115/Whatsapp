import { useState } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllData = createAsyncThunk("DataUsers",async()=>{
    const res = await fetch(`https://whatsapp-database.onrender.com/contactList`) ;
    const ans =  res.json() ;
    return ans ;
})
export const DataUser = createSlice({
    name:"DataUser",
    initialState:{
        user:[],
        loading:false,
        error:false 
    },
    extraReducers :{
        [getAllData.pending] : (state)=>{
            state.loading = true ;
        },
        [getAllData.fulfilled] : (state,action)=>{
            state.loading = false ;
            state.user = action.payload ;
        },
        [getAllData.rejected] : (state,action)=>{
            state.loading = false ;
            state.error = action.payload ;
        }
    }
})

export default DataUser.reducer ;