import React from 'react';
import { render, fireEvent } from '@testing-library/react';
// eslint-disable-next-line import/extensions
import MainPage from '../components/DetailsPage';

test('MainPage renders correctly', () => {
  const { getByPlaceholderText, getByAltText } = render(<MainPage />);

  expect(getByPlaceholderText('Search country by name..')).toBeInTheDocument();
  expect(getByAltText('americas map')).toBeInTheDocument();
  expect(getByAltText('europe map')).toBeInTheDocument();
  expect(getByAltText('africa map')).toBeInTheDocument();
  expect(getByAltText('asia map')).toBeInTheDocument();
  expect(getByAltText('oceania map')).toBeInTheDocument();
});

test('Search input updates correctly', () => {
  const { getByPlaceholderText } = render(<MainPage />);
  const input = getByPlaceholderText('Search country by name..');

  fireEvent.change(input, { target: { value: 'Canada' } });

  expect(input.value).toBe('Canada');
});
