/* eslint-disable prefer-destructuring */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getCountires = createAsyncThunk(
  'countries/getCountries',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://restcountries.com/v3.1/all');
      const apiCountries = response.data;
      const countriesFilter = [];
      apiCountries.forEach((countrie) => {
        const name = countrie.name.common;
        const capital = countrie.capital ? countrie.capital[0] : countrie.capital;
        const continent = countrie.continents ? countrie.continents[0] : countrie.continents;
        const population = countrie.population;
        const area = countrie.area;
        const flags = countrie.flags.svg;
        const alt = countrie.flags.alt;
        countriesFilter.push(
          {
            area,
            capital,
            continent,
            population,
            name,
            flags,
            alt,
          },
        );
      });
      return countriesFilter;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  },
);

const countrieSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    countryfilter: [],
  },
  reducers: {
    filtercountries: (state, action) => {
      const countryname = action.payload;
      const filteredcountry = state.countries.filter(
        (acountrie) => acountrie.name.toLowerCase().includes(countryname.toLowerCase()),
      );
      return {
        countryfilter: filteredcountry,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountires.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export const { filtercountries } = countrieSlice.actions;
export default countrieSlice.reducer;
