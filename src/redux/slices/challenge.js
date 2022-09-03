import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getChallengeQuery , addChallengeMutation } from "../../graphql/challenge";
import { url } from "../../graphql/index";
import Axios from 'axios';


const challengeSlice = new createSlice({
    name:"challenges",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getChallenge.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getChallenge.pending, (state, action) => {
          // Add user to the state array
          state.status="pending"
        })
        builder.addCase(getChallenge.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addChallenge.fulfilled, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addChallenge.pending, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addChallenge.rejected, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
    }
})

export const getChallenge = createAsyncThunk("/getChallenge",async() => {
    const response = await Axios.post(url, {query: getChallengeQuery},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data.data.challenge
})

export const addChallenge = createAsyncThunk("/addChallenge",async({input}) => {
  const token = localStorage.getItem("token")
    const variables = {
        input: {
            title: input.title,
            moduleID: input.moduleID,
        }
    }
    const response = await Axios.post(url, {query: addChallengeMutation, variables},{headers:{
        "Authorization": "Bearer "+token
    }});
    return response.data.data
})


export default challengeSlice;