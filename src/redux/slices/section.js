import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getSectionQuery,
  addSectionMutation,
  getSectionBySectionTitle,
} from "../../graphql/section";
import { url } from "../../graphql/index";
import Axios from "axios";
import {getSectionTitlesByModule} from "./sectionTitle";

const sectionSlice = new createSlice({
  name: "sections",
  initialState: {
    value: [],
    status: "",
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getSectionsBySectionTitle.fulfilled, (state, action) => {
      // Add user to the state array
      state.value = action.payload;
      state.status = "fulfilled";
    });
    builder.addCase(getSectionsBySectionTitle.pending, (state, action) => {
      // Add user to the state array
      state.status = "pending";
    });
    builder.addCase(getSectionsBySectionTitle.rejected, (state, action) => {
      // Add user to the state array
      state.error = action.payload;
      state.status = "error";
    });
    builder.addCase(addSections.fulfilled, (state, action) => {
      // Add user to the state array
      state.addSections = action.payload;
    });
    builder.addCase(addSections.pending, (state, action) => {
      // Add user to the state array
      state.addSections = action.payload;
    });
    builder.addCase(addSections.rejected, (state, action) => {
      // Add user to the state array
      state.addSections = action.payload;
    });
  },
});

export const getSections = createAsyncThunk("/getSections", async () => {
  const response = await Axios.post(
    url,
    { query: getSectionQuery },
    {
      headers: {
        Authorization: "Bearer",
      },
    }
  );
  return response.data.data.sections;
});

export const addSections = createAsyncThunk(
  "/addSections",
  async ({ input }, { dispatch }) => {
    const token = localStorage.getItem("token");
    const moduleId = input.moduleId;
    const variables = {
      input: {
        video: input.video,
        videoId: input.videoId,
        resource: input.resource,
        title: input.title,
        description: input.description,
        sectionType: input.sectionType,
        sectionTitleID: input.sectionTitleID,
        updatedAt: input.updatedAt,
        createdAt: input.createdAt,
      },
    };
    const response = await Axios.post(
      url,
      { query: addSectionMutation, variables },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = response.data.data.addSection;

    if (res.msg == "data Added") {
      // dispatch(
      //   getSectionsBySectionTitle({ sectionTitleId: input.sectionTitleID })
      // );
      dispatch(getSectionTitlesByModule({moduleId}))
    }
    return res;
  }
);
export const getSectionsBySectionTitle = createAsyncThunk(
  "/getSectionBySectionTitle",
  async ( input ) => {
    try {
      const variables = {
        sectionTitleId: input.sectionTitleId,
      };
      const response = await Axios.post(url, {
        query: getSectionBySectionTitle,
        variables,
      });
      return response.data.data.getSectionBySectionTitle;
    } catch (error) {
      console.log(error);
    }
  }
);

// export const addSections = (state) => state.courses.value
export default sectionSlice;
