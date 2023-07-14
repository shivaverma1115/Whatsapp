import { useState } from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getAllMassage = createAsyncThunk("MassageData",async()=>{
    const res = await fetch(`https://whatsapp-database.onrender.com/massage`) ;
    const ans =  res.json() ;
    return ans ;
})
export const MassageData = createSlice({
    name:"MassageData",
    initialState:{
        user:[],
        loading:false,
        error:false 
    },
    extraReducers :{
        [getAllMassage.pending] : (state)=>{
            state.loading = true ;
        },
        [getAllMassage.fulfilled] : (state,action)=>{
            state.loading = false ;
            state.user = action.payload ;
        },
        [getAllMassage.rejected] : (state,action)=>{
            state.loading = false ;
            state.error = action.payload ;
        }
    }
})

export default MassageData.reducer ;