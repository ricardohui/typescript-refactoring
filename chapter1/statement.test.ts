import { describe, it, expect } from '@jest/globals';
import plays from './plays.json';
import invoices from './invoices.json';
// Import the statement function and types
import { statement } from './statement';

// If your statement function is not exported, add `export` before it in statement.ts

describe('statement', () => {
  it('generates a correct statement for the first invoice', () => {
    // @ts-ignore - invoices.json may be an array or object, adjust as needed
    const invoice = Array.isArray(invoices) ? invoices[0] : invoices;
    const result = statement(invoice, plays);

    expect(result).toContain(`Statement for ${invoice.customer}`);
    expect(result).toMatch(/Amount owed is/);
    expect(result).toMatch(/You earned/);
    // Optionally, check for a known play name or amount if you know the data
  });
});