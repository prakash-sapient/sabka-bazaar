import { combineReducers } from "redux";
import { TOGGLE_SIDEBAR } from "../actions/action.type";
import toggleSidebarReducer from "./layout.reducer";

export const rootReducer = combineReducers({
  [TOGGLE_SIDEBAR]: toggleSidebarReducer,
});
