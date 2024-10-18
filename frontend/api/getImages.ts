import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Images } from "../types/types";

export const getImages = createAsyncThunk(
    'images/getImages',
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await axios.get<Images>(
          'http://test-backend.itdelta.agency/api/images',
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