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
            area: area,
            capital: capital,
            continent: continent,
            population: population,
            name: name,
            flags: flags,
            alt: alt,
          },
        );
      });
      console.log(countriesFilter[0].flags.svg);
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
  },
  extraReducers: (builder) => {
    builder.addCase(getCountires.fulfilled, (state, action) => {
      state.countries = action.payload;
    });
  },
});

export default countrieSlice.reducer;
