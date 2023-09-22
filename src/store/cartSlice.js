import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../services/localStorage";

const persistedState = loadFromLocalStorage();

const initialState = persistedState ? persistedState.cart : [];

export const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      let itemQuantity = 0;
      return [
        ...state,
        {
          ...payload,
          quantity: ++itemQuantity,
        },
      ];
    },

    addCartItems: (state, { payload }) => {
      state.map((item) => {
        if (item.id !== payload) {
          return state;
        }
        ++item.quantity;
      });
      return state;
    },

    removeCartItems: (state, { payload }) => {
      const arrIdx = state.findIndex((item) => item.id == payload);
      if (state[arrIdx].quantity > 1) {
        --state[arrIdx].quantity;
      } else {
        state.splice(arrIdx, 1);
      }
    },

    clearCart: (state) => {
      return [];
    },
  },
});

export const { setCartItems, addCartItems, removeCartItems, clearCart } = slice.actions;
export default slice.reducer;
