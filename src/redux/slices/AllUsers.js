import { createSlice } from "@reduxjs/toolkit";
import { getAllUsers } from "../../services/getAllUsers";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const allUsers = createSlice({
    name: "allProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsers.pending, (state) => {
                state.loading = true;
 
            })
            .addCase(getAllUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            })
            .addCase(getAllUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default allUsers.reducer;
