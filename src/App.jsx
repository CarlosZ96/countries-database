import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountires } from './redux/countries/countrieSlice.js';
import CountiresItem from './components/CountiresItem';

function App() {
  const dispatch = useDispatch();
  const countires = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);
  return (
    <div className="App">
      <header>
        <img src="https://cdn-icons-png.flaticon.com/128/921/921490.png" alt="planet img" />
        <h1>Countries Databases</h1>
      </header>
      <Routes>
          <Route path="/" element={<CountiresItem />} />
        </Routes>
    </div>
  );
}

export default App;
