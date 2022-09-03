import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMentorsQuery, addMentorsMutation } from "../../graphql/mentor";
import Axios from "axios";

const mentorsSlice = new createSlice({
  name: "mentors",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMentors.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const getMentors = createAsyncThunk("/getMentors", async () => {
  const response = await Axios.post("https://graphql.temanedtech.com/", {
    query: getMentorsQuery,
  });
  const data = response.data.data.mentors;

  return data;
});

export default mentorsSlice;
