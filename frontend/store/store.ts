import { configureStore } from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';
import imageReducer from './imageSlice';
// import commentsReducer from './commentsSlice';

export const store = configureStore({
  reducer: {
    images: imagesReducer,
    image: imageReducer,
    // comment: commentsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;