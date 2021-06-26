import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/reducer";

const rootReducer = combineReducers({
    authReducer: authReducer,
});

export default rootReducer;