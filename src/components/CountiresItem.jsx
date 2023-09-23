import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { filtercountries, getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countriesitem.css';

function CountiresItem({ CountryClas }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);

  const filterCountry = (countryName) => {
    dispatch(filtercountries(countryName));
  };

  const filter = countries.filter(
    (acountrie) => acountrie.name === 'Canada'
      || acountrie.name === 'United Kingdom'
      || acountrie.name === 'Japan'
      || acountrie.name === 'Australia'
      || acountrie.name === 'Mexico'
      || acountrie.name === 'Colombia',
  );
  console.log(filter);
  return (
    // eslint-disable-next-line jsx-quotes
    <div className={CountryClas} data-testid='countries-item'>
      {
        filter.map(
          (countrie) => (
            <div key={nanoid()} className="countrie-card">
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
              </div>
              <div>
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
              <h3 className="country-population">
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

CountiresItem.propTypes = {
  CountryClas: PropTypes.string.isRequired,
};

export default CountiresItem;
