import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videoApi";

const initialState = {
  video: {},
  isError: false,
  isLoading: false,
  error: "",
};

// async thunk for server data fetching used in extra reducer
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

//Reducer
const videoSlice = createSlice({
  name: "videoDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideo.pending,(state)=>{
        state.isError = false;
        state.isLoading = true;
    })
    .addCase(fetchVideo.fulfilled,(state, action)=>{
        state.isLoading = false;
        state.video = action.payload;
    })
    .addCase(fetchVideo.rejected, (state, action)=>{
        state.isError = true;
        state.isLoading = false;
        state.error = action.error?.message;
    })
  },
});

export default videoSlice.reducer;
