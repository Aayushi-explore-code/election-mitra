import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders all 5 steps of the Voter Journey', () => {
    render(<App />);
    
    expect(screen.getByText('Roll Check')).toBeInTheDocument();
    expect(screen.getByText('ID Verification')).toBeInTheDocument();
    expect(screen.getByText('Booth Finding')).toBeInTheDocument();
    expect(screen.getByText('EVM Process')).toBeInTheDocument();
    expect(screen.getByText('Result Day')).toBeInTheDocument();
  });
});
