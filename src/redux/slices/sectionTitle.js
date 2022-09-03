import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSectionTitleQuery,addSectionTitleMutation } from "../../graphql/sectionTitle";
import { url } from "../../graphql/index";
import Axios from 'axios';


const sectionTitleSlice = new createSlice({
    name:"sectionTitles",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getSectionTitles.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getSectionTitles.pending, (state, action) => {
          // Add user to the state array
          state.status="pending"
        })
        builder.addCase(getSectionTitles.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addSectionTitles.fulfilled, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addSectionTitles.pending, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
        builder.addCase(addSectionTitles.rejected, (state, action) => {
          // Add user to the state array
          state.add = (action.payload)
        })
    }
})

export const getSectionTitles = createAsyncThunk("/getSectionTitles",async() => {
  const response = await Axios.post(url, {query: getSectionTitleQuery},{headers:{
      "Authorization": "Bearer"
  }});
  return response.data.data.sectionTitles
})

export const addSectionTitles = createAsyncThunk("/addSectionTitles",async({input}) => {
  const token = localStorage.getItem("token")
  console.log(input);
    const variables = {
      input: {
        title: input.title,
        moduleID: input.moduleID,
      }
    }
    const response = await Axios.post(url, {query: addSectionTitleMutation, variables},{headers:{
        "Authorization": "Bearer "+token
    }});
    return response.data.data
})


// export const addSectionTitles = (state) => state.courses.value
export default sectionTitleSlice;