/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsPage from './DetailsPage';

test('DetailsPage renders correctly', () => {
  const { getByText } = render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>,
  );

  expect(getByText('Canada')).toBeInTheDocument();
  expect(getByText('Continent:')).toBeInTheDocument();
});
