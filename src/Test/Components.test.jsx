/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainPage from '../components/MainPage';
import CountiresItem from '../components/CountiresItem';
import CountryDetails from '../components/CountryDetails';
import DetailsPage from '../components/DetailsPage';

test('renders MainPage component', () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  );
});

test('renders CountiresItem component', () => {;
  render(
    <Provider store={store}>
      <CountiresItem CountryClas="country-container" />
    </Provider>,
  );
});

test('renders CountryDetails component', () => {
  render(
    <Provider store={store}>
      <CountryDetails Name="ExampleName" clasN="country-containerd" />
    </Provider>,
  );
});

test('renders DetailsPage component', () => {
  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>,
  );
});
