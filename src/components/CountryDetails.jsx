import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { getCountires } from '../redux/countries/countrieSlice';

function CountryDetails({ Name }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);

  console.log(JSON.stringify(countries, null, 2));
  const filterName = countries.filter(
    (acountrie) => acountrie.name.toLowerCase().includes(Name.toLowerCase()) && acountrie.name !== ' ',
  );

  console.log(filterName[0]);

  return (
    <div className="country-container">
      {
        filterName.map(
          (countrie) => (
            <div key={nanoid()} className="countrie-card">
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
              </div>
              <h1>{countrie.name}</h1>
              <h2>
                Continent:
                {countrie.continent}
              </h2>
              <h2>
                Capital:
                {countrie.capital}
              </h2>
              <h2>
                Area:
                {countrie.area}
              </h2>
              <h3>
                Population:
                {countrie.population / 1000000}
              </h3>
            </div>
          ),
        )
      }
    </div>
  );
}

CountryDetails.propTypes = {
  Name: PropTypes.string.isRequired,
};

export default CountryDetails;
