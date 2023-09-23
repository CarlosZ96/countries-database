/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountiresItem from './CountiresItem';

test('CountiresItem renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <CountiresItem CountryClas="country-container" />
    </Provider>,
  );
  expect(getByText('Canada')).toBeInTheDocument();
  expect(getByText('United Kingdom')).toBeInTheDocument();
});
