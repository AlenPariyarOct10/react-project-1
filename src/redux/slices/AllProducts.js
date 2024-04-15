import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/getProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const allProducts = createSlice({
    name: "allProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
 
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default allProducts.reducer;
