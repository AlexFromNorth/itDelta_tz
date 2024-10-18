import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ImageState, Comment } from "../types/types";
import { getImage } from "../api/getImage";
import { sendComment } from "../api/sendComment";

const initialState: ImageState = {
  image: null,
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: "image",
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<Comment>) {
      state.image?.comments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImage.fulfilled, (state, action) => {
        state.loading = false;
        state.image = action.payload;
      })
      .addCase(getImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(sendComment.pending, (state) => {
        // state.loading = true;
        state.error = null;
      })
      .addCase(
        sendComment.fulfilled,
        (state, action: PayloadAction<Comment & { id: number }>) => {
          // state.loading = false;
          // state.image?.comments.push(action.payload);
          // state.image?.comments = (action.payload);
        }
      )
      .addCase(sendComment.rejected, (state, action) => {
        // state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addComment } = imageSlice.actions;

export default imageSlice.reducer;
