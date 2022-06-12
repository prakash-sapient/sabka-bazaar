import { createSlice } from "@reduxjs/toolkit";
import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { addItemReducer } from "../reducers/my-cart.reducer";
import { MY_CART } from "../slices/action.type";

export interface MyCartState {
  show: boolean;
  count: number;
  items: ProductItem[];
  totalAmount: number;
  showCartModal: boolean;
}

const initValue: MyCartState = {
  show: false,
  count: 0,
  items: [],
  totalAmount: 0,
  showCartModal: false
};

const myCartSlice = createSlice({
  name: MY_CART,
  initialState: initValue,
  reducers: {
    addItem: addItemReducer,
    removeItem: (state, action) => {},
    increaseCount: (state, action) => {},
    decreaseCount: (state, action) => {},
    toggleCartModal: (state) => {
      state.showCartModal = !state.showCartModal
    }
  },
});

export const { addItem, removeItem, increaseCount, decreaseCount, toggleCartModal } =
  myCartSlice.actions;

export default myCartSlice.reducer;
