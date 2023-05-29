import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { ShowsT } from "../../types/common";

export const getShows = createAsyncThunk("shows/getShows", async () => {
  const response = await api.get("/shows");

  return response.data;
});

interface ShowsState {
  shows: ShowsT[];
  error: string;
  isLoading: boolean;
}

const initialState = {
  shows: [],
  error: "",
  isLoading: true,
} as ShowsState;

export const showsSlice = createSlice({
  name: "shows",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getShows.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getShows.fulfilled, (state, action) => {
      state.isLoading = false;
      state.shows = action.payload;
    });
  },
});
