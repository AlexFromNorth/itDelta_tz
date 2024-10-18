// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { CommentsState, Comment } from "../types/types";
// import { sendComment } from "../api/sendComment";
// import { searchById } from "../utils/utils";

// const initialState: CommentsState = {
//   comment: [],
//   loading: false,
//   error: null,
// };

// const commentsSlice = createSlice({
//   name: "comment",
//   initialState,
//   reducers: {
//     deleteElementReducer (state, action: PayloadAction<Comment & { id: number }>) {
//       state.comment.push(action.payload); 
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendComment.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(sendComment.fulfilled, (state, action: PayloadAction<Comment & { id: number }>) => {
//         state.loading = false;
//         state.comment.push(action.payload); 
//       })
//       .addCase(sendComment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { deleteElementReducer } = commentsSlice.actions;
// export default commentsSlice.reducer;

