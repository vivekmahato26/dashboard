import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTicketsQuery, addTicketsMutation } from "../../graphql/tickets";
import Axios from "axios";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    value: [],
    filterData: [],
  },
  reducers: {
    filterData: (state, action) => {
      state.filterData = state.value.filter(
        (e) => e.ticket_type == action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTickets.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export const getTickets = createAsyncThunk("/getTickets", async () => {
  const response = await Axios.post("https://graphql.temanedtech.com/", {
    query: getTicketsQuery,
  });
  const data = response.data.data.tickets;

  return data;
});

export const { filterData } = ticketsSlice.actions;

export default ticketsSlice;
