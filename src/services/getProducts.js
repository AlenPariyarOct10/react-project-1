import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
    "products/allProducts", // Action type prefix
    async () => {
            const response = await axios.get('https://fakestoreapi.com/products');
            // const data = await response.json();
            // console.log("asyThu", data);
            return response;
    }
);
