import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../redux/countries/slice";
import activitiesReducer from "../redux/activities/slice";

export const store = configureStore({
  reducer: {
    countries: countriesReducer,
    activities: activitiesReducer,
  },
});
