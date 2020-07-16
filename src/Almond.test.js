import React from 'react';
import { render } from '@testing-library/react';
import Almond from './Almond';

test('renders learn react link', () => {
  const { getByText } = render(<Almond />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
