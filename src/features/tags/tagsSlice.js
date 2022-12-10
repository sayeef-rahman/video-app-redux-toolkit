import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagsApi";

const initialState ={
    isError: false,
    isLoading: false,
    error: "",
    tags: []
}

//async thunk for server data fetching used in extra reducer
export const fetchTags = createAsyncThunk("tags/fetchTags", async()=>{
    const tags = await getTags();
    return tags
});

// reducer
const tagsSlice = createSlice({
    name: "tags",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchTags.pending, (state)=>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTags.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.tags = action.payload;
        })
        .addCase(fetchTags.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.tags = [];
            state.error = action.error?.message;
        })
    }
});

export default tagsSlice.reducer;