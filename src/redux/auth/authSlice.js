import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
};

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        loginAction(state, action) {
            console.log(action);
            state.user = action.payload
        },
        registerAction(state, action) {
            state.user = action.payload
        },
    }
})



export default authSlice;