import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { nanoid } from '@reduxjs/toolkit';
import { getCountires } from '../redux/countries/countrieSlice';

function CountryDetails(Name) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);

  const filterName = countries.filter(
    (acountrie) => acountrie.name === Name,
  );
  return (
    <div>
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
