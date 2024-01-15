import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather stations header', () => {
  render(<App />);
  const headerText = screen.getByText(/weather stations in minnesota/i);
  expect(headerText).toBeInTheDocument();
});
