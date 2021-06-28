import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authReducer";

const rootReducer = combineReducers({
    authReducer,
});

export default rootReducer;