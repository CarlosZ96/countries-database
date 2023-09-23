import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import home from '../img/home.png';
import { getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/detailspage.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.countryfilter);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);
  return (
    // eslint-disable-next-line jsx-quotes
    <div data-testid='details-page'>
      {
        countries.map(
          (countrie) => (
            <div key={nanoid()} className="country-card">
              <div className="home-container">
                <NavLink to="/"><img src={home} alt="home" className="home" /></NavLink>
              </div>
              <div className="flag-containerd">
                <img src={countrie.flags} alt={countrie.alt} className="flagd" />
                <div>
                  <h1 className="country-name">{countrie.name.toUpperCase()}</h1>
                  <h3>
                    Population:
                    {countrie.population / 1000000}
                  </h3>
                </div>
              </div>
              <h1 className="country-information">
                {countrie.name}
                {'  '}
                information:
              </h1>
              <h2 className="country-information light">
                Continent:
                {' '}
                {countrie.continent}
              </h2>
              <h2 className="country-information">
                Capital:
                {' '}
                {countrie.capital}
              </h2>
              <h2 className="country-information light">
                Area:
                {' '}
                {countrie.area}
              </h2>
            </div>
          ),
        )
      }
    </div>
  );
}

export default DetailsPage;
