import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountires } from '../redux/countries/countrieSlice';

function Continents() {
  const dispatch = useDispatch();
  const countries = useSelector((store) => store.countries.continetfilter);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);
  console.log(countries);
  return <div>Continents</div>;
}

export default Continents;
