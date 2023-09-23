/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */

import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountryDetails from './CountryDetails';

test('CountryDetails renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CountryDetails Name="Canada" clasN="country-containerd" />
    </Provider>,
  );

  expect(getByText('Canada')).toBeInTheDocument();
  expect(getByText('Population:')).toBeInTheDocument();
});
