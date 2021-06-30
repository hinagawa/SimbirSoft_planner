import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";
import lessonReducer from "./lesson/lessonReducer";

const rootReducer = combineReducers({
    authReducer,
    lessonReducer
});

export default rootReducer;