import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const userLogin = createAsyncThunk(
    "auth/login",
    async ({username, password}) => {
        try{
            const config = {
                headers: {
                    "Content-Type":"application/json",
                },
            };

            const {data} = await axios.post(
                `https://fakestoreapi.com/auth/login`,
                {username, password},
                config
            );
            console.log("test ",data);
            return data;
        }catch(error)
        {
            // console.log("test ",error);
         
            
            // if(error.response && error.response.data.message)
            // {
            //     return rejectWithValue(error.response.data.message);
            // }else{
            //     return rejectWithValue(error.message);
            // }
        }
    }
)