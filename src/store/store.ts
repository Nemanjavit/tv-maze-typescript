import { configureStore } from "@reduxjs/toolkit";
import { showsSlice } from "./shows/showsSlice";

export const store = configureStore({
  reducer: {
    shows: showsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
