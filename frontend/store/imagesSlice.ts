// import { updateElement } from './../utils/utils';
import { createSlice } from "@reduxjs/toolkit";
import { ImagesState } from "../types/types";
import { getImages } from "../api/getImages";


const initialState: ImagesState = {
  images: [],
  loading: false,
  error: null,
};

const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default imagesSlice.reducer;
