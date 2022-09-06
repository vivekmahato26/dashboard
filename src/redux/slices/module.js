import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getModulesQuery,
  addModulesMutation,
  getModuleByCourse,
} from "../../graphql/module";
import { url } from "../../graphql/index";
import Axios from "axios";

const modulesSlice = new createSlice({
  name: "modules",
  initialState: {
    value: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getModules.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getModules.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending";
    });
    builder.addCase(getModules.rejected, (state, action) => {
      // Add user to the state array
      state.error = action.payload;
      state.status = "error";
    });
    builder.addCase(addModules.fulfilled, (state, action) => {
      // Add user to the state array
      state.addModules = action.payload;
    });
    builder.addCase(addModules.pending, (state, action) => {
      // Add user to the state array
      state.addModules = action.payload;
    });
    builder.addCase(addModules.rejected, (state, action) => {
      // Add user to the state array
      state.addModules = action.payload;
    });
    builder.addCase(getModulesByCourse.fulfilled, (state, action) => {
      // Add user to the state array
      state.getModulesByCourse = action.payload;
    });
    builder.addCase(getModulesByCourse.pending, (state, action) => {
      // Add user to the state array
      state.getModulesByCourse = action.payload;
    });
    builder.addCase(getModulesByCourse.rejected, (state, action) => {
      // Add user to the state array
      state.getModulesByCourse = action.payload;
    });
  },
});

export const getModules = createAsyncThunk("/getModules", async () => {
  const response = await Axios.post(
    url,
    { query: getModulesQuery },
    {
      headers: {
        Authorization: "Bearer",
      },
    }
  );
  return response.data.data.modules;
});
export const getModulesByCourse = createAsyncThunk(
  "/getModulesByCourse",
  async (args) => {
    const response = await Axios.post(
      url,
      {
        query: getModuleByCourse,
        variables: {
          courseId: args.courseId,
        },
      },
      {
        headers: {
          Authorization: "Bearer",
        },
      }
    );
    return response.data.data.getModulesByCourse;
  }
);

export const addModules = createAsyncThunk(
  "/addModules",
  async (params, { dispatch }) => {
    const token = localStorage.getItem("token");
    const variables = {
      input: {
        title: params.input.title,
        courseID: params.input.courseID,
        createdAt: params.input.createdAt,
        updatedAt: params.input.updatedAt,
      },
    };
    const response = await Axios.post(
      url,
      { query: addModulesMutation, variables },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = response.data.data.addModules;
    if (res.msg == "data Added") {
      dispatch(getModulesByCourse({courseId:params.input.courseID}));
    }
    return res;
  }
);

export default modulesSlice;
