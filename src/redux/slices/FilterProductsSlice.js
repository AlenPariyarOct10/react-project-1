import { createSlice } from "@reduxjs/toolkit";
import { getFilterProducts } from "../../services/getFilterProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const FilterProductsSlice = createSlice({
    name: "FilterProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilterProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFilterProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.data; // Assuming the response has a 'data' property containing the products
            })
            .addCase(getFilterProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default FilterProductsSlice.reducer;
