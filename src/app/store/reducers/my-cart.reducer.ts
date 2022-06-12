import { ProductItem } from "app/core/models/interfaces/ProductItem";
import { Action } from "../Action.interface";
import { MyCartState } from "../slices/my-cart.slice";
import { toast } from "react-toastify";
import { MY_CART_STRING } from "app/core/String";

export const addItemReducer = (state: MyCartState, action: Action) => {
  let alreadyAdded = false;
  const items = state.items.map((elem) => {
    if (elem.id === action.payload.id) {
      alreadyAdded = true;
      return new ProductItem({ ...elem, count: elem.count + 1 });
    } else {
      return elem;
    }
  });
  if (!alreadyAdded) {
    state.items.push(new ProductItem({ ...action.payload, count: 1 }));
    state.count++;
  } else {
    state.items = items;
  }
  toast(MY_CART_STRING.itemAddedSuccess, { type: "success" });
};

export default {
  addItemReducer,
};
