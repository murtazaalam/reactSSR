import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    admin: null,
    isLogin: false,
    role: null
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateUserAction: (state, action) => {
            state.admin = action.payload.user;
        },
        loginAction: (state, action) => {
            state.admin = action?.payload?.admin;
            state.isLogin = true;
        },
        logoutAction: () => {
            window.localStorage.removeItem("token");
            return initialState;
        },
    },
});

export const {loginAction, logoutAction, updateUserAction} =
    authSlice.actions;

export default authSlice.reducer;
