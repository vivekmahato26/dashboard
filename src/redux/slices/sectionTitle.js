import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSectionTitleQuery,
  addSectionTitleMutation,
  getSectionTitleByModule,
} from "../../graphql/sectionTitle";
import { url } from "../../graphql/index";
import Axios from "axios";
import { getModulesByCourse } from "./module";

const sectionTitleSlice = new createSlice({
  name: "sectionTitles",
  initialState: {
    value: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSectionTitles.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getSectionTitles.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending";
    });
    builder.addCase(getSectionTitles.rejected, (state, action) => {
      // Add user to the state array
      state.error = action.payload;
      state.status = "error";
    });
    builder.addCase(addSectionTitles.fulfilled, (state, action) => {
      // Add user to the state array
      state.add = action.payload;
    });
    builder.addCase(addSectionTitles.pending, (state, action) => {
      // Add user to the state array
      state.add = action.payload;
    });
    builder.addCase(addSectionTitles.rejected, (state, action) => {
      // Add user to the state array
      state.add = action.payload;
    });
    builder.addCase(getSectionTitlesByModule.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
    });
    builder.addCase(getSectionTitlesByModule.pending, (state, action) => {
      // Add user to the state array
      state.pending = action.payload;
    });
    builder.addCase(getSectionTitlesByModule.rejected, (state, action) => {
      // Add user to the state array
      state.error = action.payload;
    });
  },
});

export const getSectionTitles = createAsyncThunk(
  "/getSectionTitles",
  async () => {
    const response = await Axios.post(
      url,
      { query: getSectionTitleQuery },
      {
        headers: {
          Authorization: "Bearer",
        },
      }
    );
    return response.data.data.sectionTitles;
  }
);
export const getSectionTitlesByModule = createAsyncThunk(
  "/getSectionTitleByModule",
  async ({moduleId}) => {
    const response = await Axios.post(
      url,
      { query: getSectionTitleByModule, variables: { moduleId } },
      {
        headers: {
          Authorization: "Bearer",
        },
      }
    );
    return response.data.data.getSectionTitleByModule;
  }
);

export const addSectionTitles = createAsyncThunk(
  "/addSectionTitles",
  async (params, { dispatch }) => {
    const token = localStorage.getItem("token");
    const variables = {
      input: {
        title: params.input.title,
        moduleID: params.input.moduleID,
      },
    };
    const response = await Axios.post(
      url,
      { query: addSectionTitleMutation, variables },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = response.data.data.addSectionTitle;
    if (res.msg == "data Added") {
      try {
        dispatch(getSectionTitlesByModule({ moduleId: params.input.moduleID }));
      } catch (error) {
        console.log(error);
      }
    }
    return res;
  }
);

// export const addSectionTitles = (state) => state.courses.value
export default sectionTitleSlice;
