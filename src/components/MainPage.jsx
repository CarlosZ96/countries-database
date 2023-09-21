import React, { useState } from 'react';
import CountiresItem from './CountiresItem';
import Search from '../img/lupa.png';
import africa from '../img/africa.png';
import america from '../img/america.png';
import asia from '../img/asia.png';
import europe from '../img/europa.png';
import oceania from '../img/australia.png';
import '../stylesheets/mainpage.css';
import CountryDetails from './CountryDetails';

function MainPage() {
  const [nameValue, setNameValue] = useState('');
  const getName = (e) => {
    const capitalizedInput = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);
    setNameValue(capitalizedInput);
    console.log(nameValue);
  };

  return (
    <div>
      <CountiresItem />
      <CountryDetails Name={nameValue} />
      <div className="categorie">
        <div className="search-container">
          <input type="text" onChange={getName} value={nameValue} className="search" placeholder="Search country by name.." />
          <button type="button"><img src={Search} alt="search" className="search-icon" /></button>
        </div>
        <section className="continents-container">
          <div className="continent">
            <img src={america} className="continent-map" alt="americas map" />
            <div className="continent-txt">
              <h2>America</h2>
              <h4>Population: 1002.000.000</h4>
            </div>
          </div>
          <div className="continent">
            <img src={europe} className="continent-map" alt="europe map" />
            <div className="continent-txt">
              <h2>Europe</h2>
              <h4>Population: 746.4000.000</h4>
            </div>
          </div>
          <div className="continent">
            <img src={africa} className="continent-map" alt="africa map" />
            <div className="continent-txt">
              <h2>Africa</h2>
              <h4>Population: 1.216.000.000</h4>
            </div>
          </div>
          <div className="continent">
            <img src={asia} className="continent-map" alt="asia map" />
            <div className="continent-txt">
              <h2>Asia</h2>
              <h4>Population: 4.561.000.000</h4>
            </div>
          </div>
          <div className="continent">
            <img src={oceania} className="continent-map" alt="oceania map" />
            <div className="continent-txt">
              <h2>Oceania</h2>
              <h4>Population: 41.117.000</h4>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainPage;
