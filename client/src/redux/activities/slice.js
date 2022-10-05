import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_ACTIVITIES } from "../../utils/URLS";

const initialState = {
  activities: [],
  status: "Idle",
};

export const fetchActivities = createAsyncThunk("/activities", async () => {
  try {
    const response = (await axios.get(GET_ACTIVITIES)).data;
    return response;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(fetchActivities.pending, (state, action) => {
        state.status = "Loading";
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.status = "Succeeded";

        state.activities = action.payload.data;
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.status = "Failed";
        state.error = action.error.message;
      });
  },
});

export const getActivitiesStatus = (state) => state.activities.status;
export const getActivities = (state) => state.activities.activities;

export default activitiesSlice.reducer;
