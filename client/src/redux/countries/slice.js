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

export const fetchCountriesByName = createAsyncThunk(
  "/country/name",
  async (name) => {
    try {
      const response = (await axios.get(COUNTRIES_BY_NAME + name)).data;
      console.log("🚀 ~ file: slice.js ~ line 33 ~ response", response);
      return response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

// export const userDiveLogList = (userId) => {
//   return axios.get(API_URL + `userdiveloglist/${userId}`);
// };

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    clean: {
      reducer(state, action) {
        state.countriesFiltered = [];
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCountriesByName.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.countries = action.payload.data;
        state.countriesFiltered = action.payload.data;
      })
      .addCase(fetchCountriesByName.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.countriesFiltered = action.payload.data;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllCountries = (state) => state.countries.countries;
export const getAllCountriesFiltered = (state) =>
  state.countries.countriesFiltered;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;
export const { clean } = countriesSlice.actions;

export default countriesSlice.reducer;
