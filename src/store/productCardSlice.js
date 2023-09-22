import { createSlice } from "@reduxjs/toolkit";
import { loadFromLocalStorage } from "../services/localStorage";

const persistedState = loadFromLocalStorage();

const initialState = persistedState
  ? persistedState.products
  : [
      {
        name: "Nike Air Presto",
        price: 340,
        id: 1,
        description:
          "A light-weight, elegant product that makes you feel like you are walking on water.",
        image:
          "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        ratings: 4,
        brand: "Nike",
        reviews: "5,010",
        tags: ["UX", "React", "Vue"],
      },
      {
        name: "Nike ,Out of the League",
        price: 1134,
        id: 2,
        description:
          "As the name says, these pair of shoes are so costly that you can't afford it.",
        image:
          "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        ratings: 3,
        brand: "Nike",
        reviews: "15,000",
        tags: ["UX", "React", "Vue"],
      },
      {
        name: "Nike Adidas",
        price: 874,
        id: 3,
        description: "Brother from another mother Shoes",
        image:
          "https://images.pexels.com/photos/1307128/pexels-photo-1307128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ratings: 5,
        brand: "Nike",
        reviews: "330",
        tags: ["UX", "React", "Vue"],
      },
      {
        name: "Puma Skids",
        id: 4,
        description:
          "A cheap copy of Nike Air Presos for those you still want to brag about them",
        price: 644,
        image:
          "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        ratings: 3,
        brand: "Puma",
        reviews: "12,470",
        tags: ["UX", "React", "Vue"],
      },
      {
        name: "Nike Flip Flops",
        price: 9511,
        id: 5,
        description: "Shh! We got an imposter",
        image:
          "https://images.unsplash.com/photo-1603218167744-4b6371f208c2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        ratings: 2,
        brand: "Mahabis",
        reviews: "1,000",
        tags: ["UX", "React", "Vue"],
      },
    ];

export const slice = createSlice({
  name: "product",
  initialState,
  reducers: {
    filters: (state, action) => {
      if (action.payload == "lowest") {
        state.sort((a, b) => a.price - b.price);
      }
      if (action.payload == "highest") {
        state.sort((a, b) => b.price - a.price);
      }
      if (action.payload == "recommended") {
        return initialState;
      }
    },
  },
});

export const { filters } = slice.actions;
export default slice.reducer;
