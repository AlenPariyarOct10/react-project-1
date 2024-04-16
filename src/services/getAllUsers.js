import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
    "users/allUsers", // Action type prefix
    async () => {
            const response = await axios.get('https://fakestoreapi.com/users');;
            return response;
    }
);
