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
  state.totalAmount = getTotalAmount(state.items);
  toast(MY_CART_STRING.itemAddedSuccess, { type: "success" });
};

export const removeItemReducer = (state: MyCartState, action: Action) => {
  const items = state.items.filter((elem) => elem.id !== action.payload.id);
  state.items = items;
  state.totalAmount = getTotalAmount(state.items);
};

export const increaseItemCountReducer = (
  state: MyCartState,
  action: Action
) => {
  const items = state.items.map((elem) => {
    if (elem.id !== action.payload.id) {
      return elem;
    } else {
      return new ProductItem({
        ...action.payload,
        count: action.payload.count + 1,
      });
    }
  });
  state.items = items;
  state.totalAmount = getTotalAmount(state.items);
};

export const decreaseItemCountReducer = (
  state: MyCartState,
  action: Action
) => {
  const items = state.items.map((elem) => {
    if (elem.id !== action.payload.id) {
      return elem;
    } else {
      return new ProductItem({
        ...action.payload,
        count: action.payload.count - 1 > 0 ? action.payload.count - 1 : 0,
      });
    }
  });
  state.items = items;
  state.totalAmount = getTotalAmount(state.items);
};

const getTotalAmount = (items: any) => {
  const totalAmount = items.reduce(
    (total: any, elem: any) => total + elem.count * elem.price,
    0
  );
  return totalAmount
}
