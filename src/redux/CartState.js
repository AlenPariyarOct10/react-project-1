import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addProduct(state, action) {
      state.push(action.payload);
    },

    updateProductQuantity(state, action) {
      const { id, quantity } = action.payload;
      return state.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      );
    },

    removeProduct(state, action) {
      return state.filter(item => item.id !== action.payload);
    },

    removeAllProduct(state, action) {
      return [];
    },
  },
});

export const { addProduct, removeProduct, removeAllProduct, updateProductQuantity } = cartSlice.actions;
export default cartSlice.reducer;
