import { configureStore } from '@reduxjs/toolkit'
import homeSlice from "./homeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
})

//key deke homeslice ko ek key deke uske andar save kara dena h 