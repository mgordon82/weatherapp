// MyComponent.test.js
import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import mockCurrent from '../tests/mockCurrent.json';

// Mock the fetch function
jest.mock('../App', () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock the response data
const mockData = mockCurrent;
const mockResponse = { ok: true, json: jest.fn().mockResolvedValue(mockData) };

// Set up the fetch mock implementation
global.fetch = jest.fn().mockResolvedValue(mockResponse);

describe('Weather App Testing', () => {
  it('fetches data and renders it correctly', async () => {
    render(<App />);

    // Wait for the component to render and fetch data
    await waitFor(() => {
      expect(screen.getByText('Loading Weather Data')).toBeInTheDocument();
    });
  });
});
