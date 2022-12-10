import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getReatedVideos from "./relatedVideosApi";

const initialState = {
  isLoading: false,
  isError: false,
  relatedVideos: [],
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async ({ tags, id }) => {
    const relatedVideos = await getReatedVideos({ tags, id });
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideosSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.error = "";
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedVideos = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedVideosSlice.reducer;
