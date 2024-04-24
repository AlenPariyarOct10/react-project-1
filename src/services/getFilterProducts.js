import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFilterProducts = createAsyncThunk(
    "products/Filter", // Action type prefix
    async (sortBy) => {
            const response = await axios.get(`https://fakestoreapi.com/products?sort=${sortBy}`);
            return response;
    }
);

