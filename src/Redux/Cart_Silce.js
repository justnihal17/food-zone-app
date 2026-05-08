import { createSlice, isAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: 0,
    data: [],
  },
  reducers: {
    addCart: (state, action) => {
      state.item = +action.payload;
    },
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    removeCart: (state, action) => {
      state.item.pop();
    },
    clearCart: (state, action) => {
      state.item = 0;
      state.data = [];
    },
  },
});
export const { addCart, removeCart, clearCart, addItem } = cartSlice.actions;
export default cartSlice.reducer;
