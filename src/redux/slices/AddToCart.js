import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: [],
};

const addToCart = createSlice({
  name: "addtocart",
  initialState,
  reducers: {
    updateCart: (state, action) =>{
        state.loading = true;
        state.data.push(action.payload); //merges new data with existing data
    },

    setLoading: (state, action) =>{
        state.loading = action.payload;
    },
  }  ,
});

export const {updateCart, setLoading} = addToCart.actions;