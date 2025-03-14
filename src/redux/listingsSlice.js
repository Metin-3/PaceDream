// Redux - listingSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    listings: [],
    loading: false,
    error: null,
};

// Async thunk for fetching listings
export const fetchListings = createAsyncThunk(
    "listings/fetchListings",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get("https://your-api-url.com/api/listings");
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "Something went wrong");
        }
    }
);

const listingSlice = createSlice({
    name: "listings",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchListings.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchListings.fulfilled, (state, action) => {
                state.loading = false;
                state.listings = action.payload;
            })
            .addCase(fetchListings.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default listingSlice.reducer;