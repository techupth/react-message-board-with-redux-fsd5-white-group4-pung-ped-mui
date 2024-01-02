import { configureStore } from "@reduxjs/toolkit";
import messageBoardSlice from "../slices/messageBoardSlice";

export const store = configureStore({
  reducer: { messageBoard: messageBoardSlice },
});
