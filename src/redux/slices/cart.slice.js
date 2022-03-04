import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartCount: 0
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCartAction: (state, action) => {
            state.user = action.payload.user;
        },
        cartAction: (state, action) => {
            state.cartCount = action?.payload?.cartCount;
        }
    },
});

export const {updateCartAction, cartAction} =
    cartSlice.actions;

export default cartSlice.reducer;
