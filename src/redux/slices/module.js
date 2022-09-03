import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getModulesQuery,addModulesMutation } from "../../graphql/module";
import { url } from "../../graphql/index";
import Axios from 'axios';


const modulesSlice = new createSlice({
    name:"modules",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getModules.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getModules.pending, (state, action) => {
          // Add user to the state array
          state.status="pending"
        })
        builder.addCase(getModules.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addModules.fulfilled, (state, action) => {
          // Add user to the state array
          state.addModules = (action.payload)
        })
        builder.addCase(addModules.pending, (state, action) => {
          // Add user to the state array
          state.addModules = (action.payload)
        })
        builder.addCase(addModules.rejected, (state, action) => {
          // Add user to the state array
          state.addModules = (action.payload)
        })
    }
})

export const getModules = createAsyncThunk("/getModules",async() => {
    const response = await Axios.post(url, {query: getModulesQuery},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data.data.modules
})

export const addModules = createAsyncThunk("/addModules",async({input}) => {
  const token = localStorage.getItem("token")
    const variables = {
        input: {
            title: input.title,
            courseID: input.courseID,
            createdAt: input.createdAt,
            updatedAt: input.updatedAt
        }
    }
    const response = await Axios.post(url, {query: addModulesMutation, variables},{headers:{
        "Authorization": "Bearer "+ token
    }});
    return response.data
})


export default modulesSlice;