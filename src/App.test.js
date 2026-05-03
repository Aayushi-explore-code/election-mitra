import { render, screen } from '@testing-library/react';
// Basic test to verify the app renders correctly
test('renders the main application title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Indian Election Mitra/i);
  expect(titleElement).toBeInTheDocument();
});

test('verifies the presence of the journey timeline', () => {
  render(<App />);
  const timelineElement = screen.getByText(/Election Journey/i);
  expect(timelineElement).toBeInTheDocument();
});
