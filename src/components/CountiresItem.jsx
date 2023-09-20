import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countries.css';

function CountiresItem() {
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
  console.log(filter);
  return (
    <div className="countires-container">
      {
        filter.map(
          (countrie) => (
            <div key={nanoid()} className="countrie-card">
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
              </div>
              <h1>{countrie.name}</h1>
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

export default CountiresItem;
