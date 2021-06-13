import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from './Example';

describe('App', () => {
  test('renders App component', () => {
    render(<Example />);

    expect(screen.getByText('Hello React')).toBeInTheDocument();
  });
});
