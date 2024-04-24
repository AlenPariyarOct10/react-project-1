import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
    "products/allProducts", // Action type prefix
    async () => {
            const response = await axios.get('https://fakestoreapi.com/products');;
            return response;
    }
);
export const fetchCarouselData = createAsyncThunk(
    "products/carousel", // Action type prefix
    async () => {
            const response = await axios.get('https://fakestoreapi.com/products?limit=5');
            return response;
    }
);
export const fetchSearchProduct = createAsyncThunk(
    "products/search", // Action type prefix
    async (product) => {
            const response = await axios.get(`https://fakestoreapi.com/products/${product}`);
            return response;
    }
);

