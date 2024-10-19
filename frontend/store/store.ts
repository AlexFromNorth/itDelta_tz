import { configureStore } from "@reduxjs/toolkit";
import imagesReducer from "./imagesSlice";
import imageReducer from "./imageSlice";

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
