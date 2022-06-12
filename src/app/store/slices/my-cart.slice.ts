import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { addItemReducer } from "../reducers/my-cart.reducer";
import { MY_CART } from "../slices/action.type";

export interface MyCartState {
  show: boolean;
  count: number;
  items: ProductItem[];
  totalAmount: number;
}

const initValue: MyCartState = {
  show: false,
  count: 0,
  items: [],
  totalAmount: 0,
};

const myCartSlice = createSlice({
  name: MY_CART,
  initialState: initValue,
  reducers: {
    addItem: addItemReducer,
    removeItem: (state, action) => {},
    increaseCount: (state, action) => {},
    decreaseCount: (state, action) => {},
  },
});

export const { addItem, removeItem, increaseCount, decreaseCount } =
  myCartSlice.actions;

export default myCartSlice.reducer;
