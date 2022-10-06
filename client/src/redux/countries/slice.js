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
  selectedActivity: "All Activities",
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
      return response;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    clean(state, action) {
      state.countriesFiltered = [];
      state.country = {};
      state.selectedActivity = "";
      state.selectedContinent = "";
    },
    orderByName(state, action) {
      const order = [...state.countriesFiltered];

      const countriesOrderedByName = order.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          if (action.payload === "a-z") {
            return -1; // a comes before b in the sort order
          } else {
            return 1;
          }
        }

        if (nameA > nameB) {
          if (action.payload === "z-a") {
            return -1; // b comes before a in the sort order
          } else {
            return 1;
          }
        }
        return 0;
      });
      state.countriesFiltered = countriesOrderedByName;
    },
    orderByPopulation(state, action) {
      const order = [...state.countriesFiltered];

      const countriesOrderedByPopulation = order.sort((a, b) => {
        if (a.population < b.population) {
          if (action.payload === "desc") {
            return -1; // a comes before b in the sort order
          } else {
            return 1;
          }
        }

        if (a.population > b.population) {
          if (action.payload === "asc") {
            return -1; // b comes before a in the sort order
          } else {
            return 1;
          }
        }
        return 0;
      });
      state.countriesFiltered = countriesOrderedByPopulation;
    },
    filterByActivityOrContinent(state, action) {
      const countries = [...state.countries];
      const continentFilter = action.payload.continentFilter;
      const activityFilter = action.payload.activityFilter;
      let result = countries;

      if (continentFilter && continentFilter !== "All Continents") {
        result = result.filter((country) =>
          country.continent.includes(continentFilter)
        );
      }

      if (activityFilter && activityFilter !== "All Activities") {
        result = result.filter((country) =>
          country.activities.some((activity) => {
            return activity.name === activityFilter;
          })
        );
      }
      state.countriesFiltered = result;
      state.selectedActivity = action.payload.activityFilter;
      state.selectedContinent = action.payload.continentFilter;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCountries.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.countries = action.payload.data;
        state.countriesFiltered = action.payload.data;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      })
      .addCase(fetchCountriesByName.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchCountriesByName.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.countriesFiltered = action.payload.data;
      });
  },
});

export const selectAllCountries = (state) => state.countries.countries;
export const getAllCountriesFiltered = (state) =>
  state.countries.countriesFiltered;
export const getCountriesStatus = (state) => state.countries.status;
export const getCountriesError = (state) => state.countries.error;
export const selectedActivity = (state) => state.countries.selectedActivity;
export const selectedContinent = (state) => state.countries.selectedContinent;
export const {
  clean,
  orderByName,
  orderByPopulation,
  filterByActivityOrContinent,
} = countriesSlice.actions;

export default countriesSlice.reducer;
