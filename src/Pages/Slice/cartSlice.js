import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      state.cartItem.push(action.payload);
      state.totalQuantity += action.payload.quantity;
      state.totalAmount += action.payload.totalPrice;
    },

    increaseCartQuantity(state, action) {
      const val = state.cartItem.find((item) => item.id === action.payload);
      if (val) {
        val.count--;
        val.quantity++;
        val.totalPrice = val.price * val.quantity;
        state.totalQuantity++;
        state.totalAmount += val.price;
      }
    },
    decreaseCartQuantity(state, action) {
      const val = state.cartItem.find((item) => item.id === action.payload);
      if (val) {
        val.count++;
        val.quantity--;
        val.totalPrice = val.totalPrice - val.price;
        state.totalQuantity--;
        state.totalAmount -= val.price;
      }
    },
    dropItem(state, action) {
      const valIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (valIndex !== -1) {
        const val = state.cartItem[valIndex];
        state.totalQuantity -= val.quantity;
        state.totalAmount -= val.totalPrice;
        state.cartItem.splice(valIndex, 1);
      }
    },
  },
});
export default cartSlice.reducer;
export const {
  addItem,
  addQuantiy,
  dropItem,
  increaseCartQuantity,
  decreaseCartQuantity,
} = cartSlice.actions;
