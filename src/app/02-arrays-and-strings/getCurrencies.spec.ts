import { getCurrencies } from './getCurrencies';

describe('getCurrencies', () => {
  it('should contain the supported currences', () => {
    expect(getCurrencies()).toContain('USD');
    expect(getCurrencies()).toContain('AUD');
    expect(getCurrencies()).toContain('EUR');
  });
});
