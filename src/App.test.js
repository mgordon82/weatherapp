import { render, screen } from '@testing-library/react';

import App from './App';

test('loading screen test', () => {
  render(<App />);
  const headerText = screen.getByText(/loading weather data/i);
  return expect(headerText).toBeInTheDocument();
});
