import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "../slice/quote";

export const store = configureStore({
  reducer: {
    quoteSlice,
  }
})
