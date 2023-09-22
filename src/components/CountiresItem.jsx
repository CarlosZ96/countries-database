import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countriesitem.css';

function CountiresItem({ CountryClas }) {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);

  const filter = countries.filter(
    (acountrie) => acountrie.name === 'United States'
      || acountrie.name === 'United Kingdom'
      || acountrie.name === 'China'
      || acountrie.name === 'Australia'
      || acountrie.name === 'Mexico'
      || acountrie.name === 'Colombia',
  );

  filter.sort((a, b) => b.population - a.population);

  return (
    <div className={CountryClas}>
      {
        filter.map(
          (countrie) => (
            <div key={nanoid()} className="countrie-card">
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
              </div>
              <h1 className="country-name">{countrie.name}</h1>
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
