import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCoursesQuery,addCourseMutation } from "../../graphql/course";
import { url } from "../../graphql/index";
import Axios from 'axios';

const courseSlice = new createSlice({
    name:"courses",
    initialState: {
        value: [],
        status:"",
        error:"",
        addCourse: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getCourses.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status = "fulfilled"
        })
        builder.addCase(getCourses.pending, (state, action) => {
          // Add user to the state array
          state.status="peding"
        })
        builder.addCase(getCourses.rejected, (state, action) => {
          // Add user to the state array
          state.error  = action.payload;
          state.status  = "error";
        })
        builder.addCase(addCourses.fulfilled, (state, action) => {
          // Add user to the state array
          state.addCourse = (action.payload)
        })
        builder.addCase(addCourses.pending, (state, action) => {
          // Add user to the state array
          state.addCourse = (action.payload)
        })
        builder.addCase(addCourses.rejected, (state, action) => {
          // Add user to the state array
          state.addCourse = (action.payload)
        })
    }
})

export const getCourses = createAsyncThunk("/getCourses",async() => {
    const response = await Axios.post(url, {query: getCoursesQuery},{headers:{
        "Authorization": "Bearer"
    }});
    // console.log(response.data.data.courses);
    return response.data.data.courses
})

export const addCourses = createAsyncThunk("/addCourses",async({input}) => {
  const token = localStorage.getItem("token")
  console.log(token);
    const variables = {
        input: {
            course_name: input.course_name,
            totalVideos: input.totalVideos,
            totalAssignments: input.totalAssignments,
            totalProjects: input.totalProjects,
            totalMilestones: input.totalMilestones,
            uploadedAt: input.uploadedAt,
            createdAt: input.createdAt
        }
    }
    const response = await Axios.post(url, {query: addCourseMutation, variables},{headers:{
        "Authorization": "Bearer " + token
    }});
    return response.data.data.addCourse
})


// export const addCourses = (state) => state.courses.value
export default courseSlice;