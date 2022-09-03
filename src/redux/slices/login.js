import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLoginQuery } from "../../graphql/login";
import { url } from "../../graphql/index";
import Axios from 'axios';

const loginSlice = new createSlice({
    name:"login",
    initialState: {
        value: {}
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getLogin.fulfilled, (state, action) => {
          // Add user to the state array
          state.value = (action.payload)
        })
    }
})

export const getLogin = createAsyncThunk("/getLogin",async(_,args) => {
    const variables = {
        input: {
            email: args.input.email,
            password: args.input.password
        }
    }
    const response = await Axios.post(url, {query: getLoginQuery, variables},{headers:{
        "Authorization": "Bearer"
    }});
    return response.data
})



export default loginSlice;