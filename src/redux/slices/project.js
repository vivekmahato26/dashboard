import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getProjectQuery , addProjectMutation } from "../../graphql/project";
import { url } from "../../graphql/index";
import Axios from 'axios';


const projectSlice = new createSlice({
    name:"project",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getProject.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getProject.pending, (state, action) => {
          // Add user to the state array
          state.status="pending"
        })
        builder.addCase(getProject.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addProject.fulfilled, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addProject.pending, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addProject.rejected, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
    }
})

export const getProject = createAsyncThunk("/getProject",async() => {
    const response = await Axios.post(url, {query: getProjectQuery},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data.data.project
})

export const addProject = createAsyncThunk("/addProject",async({input}) => {
  const token = localStorage.getItem("token")
    const variables = {
        input: {
            title: input.title,
            moduleID: input.moduleID,
        }
    }
    const response = await Axios.post(url, {query: addProjectMutation, variables},{headers:{
        "Authorization": "Bearer "+token
    }});
    return response.data.data
})


export default projectSlice;