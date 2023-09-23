import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MainPage from '../components/MainPage';

test('renders Main Page', () => {
  render(
    <Provider store={store}>
      <MainPage />
    </Provider>,
  );

  const element = screen.getByTestId('main-page');
  expect(element).toBeInTheDocument();
});
