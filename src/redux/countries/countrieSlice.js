/* eslint-disable prefer-destructuring */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://countries-cities.p.rapidapi.com/location/country/list',
  headers: {
    'X-RapidAPI-Key': 'f8c33a76f6msh61f491b42c62ff8p1262e2jsn1f5a4e9a016a',
    'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
  }
};

export const getCountires = createAsyncThunk(
  'countries/getCountries',
  async (arg, { rejectWithValue }) => {
    const options = {
      method: 'GET',
      url: 'https://countries-cities.p.rapidapi.com/location/country/list',
      headers: {
        'X-RapidAPI-Key': 'f8c33a76f6msh61f491b42c62ff8p1262e2jsn1f5a4e9a016a',
        'X-RapidAPI-Host': 'countries-cities.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const countrieSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getCountires.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export default countrieSlice.reducer;
