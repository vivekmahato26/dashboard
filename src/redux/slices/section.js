import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSectionQuery,addSectionMutation } from "../../graphql/section";
import { url } from "../../graphql/index";
import Axios from 'axios';


const sectionSlice = new createSlice({
    name:"sections",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getSections.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getSections.pending, (state, action) => {
          // Add user to the state array
          state.status="pending"
        })
        builder.addCase(getSections.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addSections.fulfilled, (state, action) => {
          // Add user to the state array
          state.addSections = (action.payload)
        })
        builder.addCase(addSections.pending, (state, action) => {
          // Add user to the state array
          state.addSections = (action.payload)
        })
        builder.addCase(addSections.rejected, (state, action) => {
          // Add user to the state array
          state.addSections = (action.payload)
        })
    }
})

export const getSections = createAsyncThunk("/getSections",async() => {
    const response = await Axios.post(url, {query: getSectionQuery},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data.data.sections
})

export const addSections = createAsyncThunk("/addSections",async({input}) => {
  const token = localStorage.getItem("token")
    const variables = {
      input: {
        video: input.video,
        videoId: input.videoId,
        resource: input.resource,
        title: input.title,
        description: input.description,
        sectionType: input.sectionType,
        sectionTitleID : input.sectionTitleID,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt
      }
    }
    const response = await Axios.post(url, {query: addSectionMutation, variables},{headers:{
        "Authorization": "Bearer "+token
    }});
    return response.data.data.addSections
})


// export const addSections = (state) => state.courses.value
export default sectionSlice;