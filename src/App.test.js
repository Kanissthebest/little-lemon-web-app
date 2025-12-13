import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders Little Lemon content', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const headingElements = screen.getAllByText(/Little lemon/i);
  expect(headingElements.length).toBeGreaterThan(0);
});
