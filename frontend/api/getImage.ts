import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Image } from "../types/types";

export const getImage = createAsyncThunk(
    'image/getImage',
    async (id: number, { rejectWithValue }) => {
      try {
        const { data } = await axios.get<Image>(
          `http://test-backend.itdelta.agency/api/image/${id}`,
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
