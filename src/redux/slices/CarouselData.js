import { createSlice } from "@reduxjs/toolkit";
import { fetchCarouselData } from "../../services/getProducts";

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const carouselProducts = createSlice({
    name: "carousel",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCarouselData.pending, (state) => {
                state.loading = true;
 
            })
            .addCase(fetchCarouselData.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;

            })
            .addCase(fetchCarouselData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default carouselProducts.reducer;
