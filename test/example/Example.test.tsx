import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Example from './Example';

describe('App', () => {
  test('renders App component', () => {
    render(<Example />);
    expect(screen.getByText('Hello React')).toBeInTheDocument();
  });
});
