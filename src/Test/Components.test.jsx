/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainPage from '../components/MainPage';
import CountriesItem from '../components/CountiresItem';
import CountryDetails from '../components/CountryDetails';
import DetailsPage from '../components/DetailsPage';

jest.mock('../components/MainPage');
jest.mock('../components/CountiresItem');
jest.mock('../components/CountryDetails');
jest.mock('../components/DetailsPage');

describe('Testing components', () => {
  it('renders MainPage component', () => {
    const mainPage = render(
      <Provider store={store}>
        <MainPage />
      </Provider>,
    );
    expect(mainPage.getByTestId("main-page")).toBeInTheDocument();
    expect(mainPage).toMatchSnapshot();
  });

  it('renders CountriesItem component', () => {
    const countriesItem = render(
      <Provider store={store}>
        <CountriesItem />
      </Provider>,
    );
    expect(countriesItem.getByTestId("countries-item")).toBeInTheDocument();
    expect(countriesItem).toMatchSnapshot();
  });

  it('renders CountryDetails component', () => {
    const countryDetails = render(
      <Provider store={store}>
        <CountryDetails Name="" clasN="country-containerd" />
      </Provider>,
    );
    expect(countryDetails.getByTestId("country-details")).toBeInTheDocument();
    expect(countryDetails).toMatchSnapshot();
  });

  it('renders DetailsPage component', () => {
    const detailsPage = render(
      <Provider store={store}>
        <DetailsPage />
      </Provider>,
    );
    expect(detailsPage.getByTestId("details-page")).toBeInTheDocument();
    expect(detailsPage).toMatchSnapshot();
  });
});
