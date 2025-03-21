import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    isModelOpen: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex((item) => item.id == action.payload);
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
    openModel: (state) => {
      state.isModelOpen = true;
    },
    closeModel: (state) => {
      state.isModelOpen = false;
    },
  },
});

export const { addToCart, removeFromCart, clearCart, openModel, closeModel } =
  cartSlice.actions;

export default cartSlice.reducer;
