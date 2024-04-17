import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addNewProduct = createAsyncThunk(
    "products/addNewProduct", // Action type prefix
    async (newProductData) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/products', newProductData);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
);
