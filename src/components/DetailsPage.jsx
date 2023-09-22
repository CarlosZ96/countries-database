import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountires } from '../redux/countries/countrieSlice';
import '../stylesheets/countrydetails.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const { countries } = useSelector((store) => store.countries);
  useEffect(() => {
    dispatch(getCountires());
  }, [dispatch]);
  return (
    <div>{countries}</div>
  );
}

export default DetailsPage;
