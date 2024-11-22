import { configureStore } from '@reduxjs/toolkit'
 import pasteReducer from "../Features/Pastes/PasteSlice"
export const store = configureStore({
  reducer: {
    paste:pasteReducer
  },
})