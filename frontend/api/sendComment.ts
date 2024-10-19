import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Comment } from "../types/types";
import { addComment } from "../store/imageSlice";

export const sendComment = createAsyncThunk(
  "comment/sendComment",
  async (
    { id, comment }: { id: number; comment: Comment },
    { rejectWithValue, dispatch }
  ) => {

    dispatch(addComment(comment));
    try {
      await axios.post(
        `http://test-backend.itdelta.agency/api/image/${id}/comments`,
        {comment: comment.text}
      );
      return { ...comment, id: comment.id };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
