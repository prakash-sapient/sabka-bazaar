import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import logger from "redux-logger";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
