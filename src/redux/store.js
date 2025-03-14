import { configureStore } from "@reduxjs/toolkit";
import listingSlice from './listingsSlice';




export default configureStore({
    reducer: {
        listings: listingSlice,
    }
});