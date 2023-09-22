import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import home from '../img/home.png';
import { getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countrydetails.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countryfilter);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);
  return (
    <div>
      {
        countries.map(
          (countrie) => (
            <div key={nanoid()} className="country-card">
              <NavLink to="/"><img src={home} alt="home" /></NavLink>
              <div className="flag-container">
                <img src={countrie.flags} alt={countrie.alt} className="flag" />
                <h1 className="country-name">{countrie.name}</h1>
              </div>
              <h1>
                {countrie.name}
                {'  '}
                information:
              </h1>
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

export default DetailsPage;
