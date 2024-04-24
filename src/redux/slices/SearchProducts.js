import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchProduct } from "../../services/getProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const SearchProducts = createSlice({
    name: "SearchProducts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchProduct.pending, (state) => {
                state.loading = true;
 
            })
            .addCase(fetchSearchProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            })
            .addCase(fetchSearchProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default SearchProducts.reducer;
