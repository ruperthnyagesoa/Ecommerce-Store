import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../services/localStorage";

const persistedState = loadFromLocalStorage();

const initialState = persistedState ? persistedState.wishlists : [];

export const wishlist = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return [
        ...state,
        {
          ...action.payload,
        },
      ];
    },
    removeItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = wishlist.actions;

export default wishlist.reducer;
