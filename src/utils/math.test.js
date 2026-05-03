import { describe, it, expect } from 'vitest';

describe('Voter Logic Tests', () => {
  it('correctly calculates age eligibility', () => {
    const isEligible = (age) => age >= 18;
    expect(isEligible(19)).toBe(true);
    expect(isEligible(17)).toBe(false);
  });
});
