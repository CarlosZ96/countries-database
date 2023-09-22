import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { filtercountries, getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countrydetails.css';

function CountryDetails({ Name, clasN }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);

  const filterName = Name.trim() !== '' ? countries.filter(
    (acountrie) => acountrie.name.toLowerCase().includes(Name.toLowerCase()),
  ) : [];

  const filterCountry = (countryName) => {
    dispatch(filtercountries(countryName));
  };

  return (
    <div className={clasN}>
      {
        filterName.map(
          (countrie) => (
            <div key={nanoid()} className="country-card">
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
              </div>
              <div className="name-container">
                <h1 className="country-name">{countrie.name}</h1>
                <NavLink to="/Details">
                  <button
                    type="button"
                    className="details-button"
                    onClick={() => {
                      filterCountry(countrie.name);
                    }}
                  >
                    +
                  </button>
                </NavLink>
              </div>
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
  clasN: PropTypes.string.isRequired,
};

export default CountryDetails;
