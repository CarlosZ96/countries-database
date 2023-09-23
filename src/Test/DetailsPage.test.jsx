/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import DetailsPage from '../components/DetailsPage';

test('renders Details Page', () => {
  render(
    <Provider store={store}>
      <DetailsPage />
    </Provider>,
  );

  const element = screen.getByTestId('details-page');
  expect(element).toBeInTheDocument();
});
