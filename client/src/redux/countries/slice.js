import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {
  GET_COUNTRIES,
  COUNTRIES_BY_CODE,
  COUNTRIES_BY_NAME,
} from "../../utils/URLS/index";

const initialState = {
  countries: [],
  country: {},
  countriesFiltered: [],
  status: "Idle",
  error: null,
  selectedContinent: "All Continents",
};

export const fetchCountries = createAsyncThunk("/countries", async () => {
  try {
    const response = (await axios.get(GET_COUNTRIES)).data;
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "Loading";
        // state.countries.push(action.payload);
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.countries = action.payload;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCountries = (state) => state.countries.countries;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;

export default countriesSlice.reducer;
