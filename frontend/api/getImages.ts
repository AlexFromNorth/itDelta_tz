import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Images } from "../types/types";

export const fetchImages = createAsyncThunk(
    'images/getImages',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get<Images>(
          'https://jsonplaceholder.typicode.com/posts',
          {
            headers: {
              Accept: 'application/json',
            },
          }
        );
        return data;
      } catch (error: any) {
        return rejectWithValue(error.message);
      }
    }
  );