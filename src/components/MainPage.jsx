import React from 'react';
import CountiresItem from './CountiresItem.jsx';
import Search from '../img/lupa.png';
import africa from '../img/africa.png';
import america from '../img/america.png';
import asia from '../img/asia.png';
import europe from '../img/europa.png';
import oceania from '../img/australia.png';
import '../stylesheets/mainpage.css';

const MainPage = () => {
  return (
    <div>
      <CountiresItem />

      <div className="categorie">
        <div className="search-container">
          <input type="text" className="search" placeholder="Search country by name.." />
          <img src={Search} alt="search" className="search-icon" />
        </div>
        <section className="continents-container">
          <div className="continent">
            <img src={america} className="continent-map" alt="americas map" />
            <h3>Population: </h3>
          </div>
          <div className="continent">
            <img src={europe} className="continent-map" alt="europe map" />
            <h3>Population: </h3>
          </div>
          <div className="continent">
            <img src={africa} className="continent-map" alt="africa map" />
            <h3>Population: </h3>
          </div>
          <div className="continent">
            <img src={asia} className="continent-map" alt="asia map" />
            <h3>Population: </h3>
          </div>
          <div className="continent">
            <img src={oceania} className="continent-map" alt="oceania map" />
            <h3>Population: </h3>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MainPage;