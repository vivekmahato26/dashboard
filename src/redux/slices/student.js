import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getStudentsQuery, addStudentsMutation } from "../../graphql/student";
import Axios from "axios";

const studentSlice = new createSlice({
  name: "students",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudents.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const getStudents = createAsyncThunk("/getStudents", async () => {
  const response = await Axios.post("http://localhost:4000/", {
    query: getStudentsQuery,
  });
  const data = response.data.data.students;

  return data;
});

export default studentSlice;
