import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders checkout link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Checkout/i);
  expect(linkElement).toBeInTheDocument();
});
