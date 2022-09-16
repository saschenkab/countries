import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../redux/countries/slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
  },
});
