import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart_array: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add_items_cart: (state, action) => {
      state.cart_array.push(action.payload);
    },
    remove_items: (state, action) => {
      state.cart_array = state.cart_array.filter(
        (item) => item.id !== action.payload.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_items_cart, remove_items } = cartSlice.actions;

export default cartSlice.reducer;
