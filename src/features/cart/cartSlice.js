import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const item = state.find(p => p.id === action.payload.id);
      if (item) {
        item.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
    incrementQty: (state, action) => {
  const item = state.find(product => product.id === action.payload);
  if (item) item.qty += 1;
},
decrementQty: (state, action) => {
  const item = state.find(product => product.id === action.payload);
  if (item && item.qty > 1) item.qty -= 1;
},
    clearCart: (state) => {
        return [];
  },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
