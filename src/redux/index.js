import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./slices/course";
import loginSlice from "./slices/login";
import batchSlice from "./slices/batch";
import sectionSlice from "./slices/section";
import sectionTitleSlice from "./slices/sectionTitle";
import modulesSlice from "./slices/module";
import studentSlice from "./slices/student";
import ticketsSlice from "./slices/tickets";
import challengeSlice from "./slices/challenge";
import projectSlice from "./slices/project";
// import {csSlice} from './slices/currentState'; 


const store = configureStore({
  reducer:{
    course:courseSlice.reducer,
    login:loginSlice.reducer,
    batch:batchSlice.reducer,
    section:sectionSlice.reducer,
    sectionTitle:sectionTitleSlice.reducer,
    modules:modulesSlice.reducer,
    student: studentSlice.reducer,
    tickets: ticketsSlice.reducer,
    challenge: challengeSlice.reducer,
    project: projectSlice.reducer,
    // currentState: csSlice.reducer
  }
})

export default store;