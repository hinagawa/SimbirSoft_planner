import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authReducer",
    initialState: {
        user: null
    },
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



export default authSlice.reducer;

export const { loginAction, registerAction } = authSlice.actions; 