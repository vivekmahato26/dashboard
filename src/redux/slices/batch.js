import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBatchesQuery,addBatchMutation } from "../../graphql/batch";
import { url } from "../../graphql/index";
import Axios from 'axios';

const batchSlice = new createSlice({
    name:"batchs",
    initialState: {
        value: [],
        status:"",
        error:"",
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getBatches.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
          state.status="fulfilled"
        })
        builder.addCase(getBatches.pending, (state, action) => {
            // Add user to the state array
            state.status="pending"
        })
        builder.addCase(getBatches.rejected, (state, action) => {
        // Add user to the state array
        state.error  = action.payload;
        state.status  = "error";
        })
        builder.addCase(addBatches.fulfilled, (state, action) => {
        // Add user to the state array
        state.addBatches = (action.payload)
        })
        builder.addCase(addBatches.pending, (state, action) => {
        // Add user to the state array
        state.addBatches = (action.payload)
        })
        builder.addCase(addBatches.rejected, (state, action) => {
        // Add user to the state array
        state.addBatches = (action.payload)
        })
    }
})


export const getBatches = createAsyncThunk("/getBatches",async() => {
    const response = await Axios.post(url, {query: getBatchesQuery},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data.data.batchs
})


export const addBatches = createAsyncThunk("/addBatches",async({input}) => {
    const token = localStorage.getItem("token")
    console.log(token);
    const variables = {
        input: {
            course: input.course,
            start: input.start,
            end: input.end,
            price: input.price,
            offerId: input.offerId,
            discount: input.discount,
            currentStatus: input.currentStatus
        }
    }
    const response = await Axios.post(url, {query: addBatchMutation, variables},{headers:{
        "Authorization": "Bearer "+token
    }});
    console.log(response);
    return response.data.data.addBatches
})



export default batchSlice;