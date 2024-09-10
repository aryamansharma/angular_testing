import { compute } from './compute';

// in this describe method we pass the name of the entity we want to run test cases for in the first argument.
describe('compute', () => {
  // in this it method we write the name of the test cases we want to test.
  // in the second argument we test the cases.
  it('should return 0 if input is negative', () => {
    const result = compute(-1);
    expect(result).toBe(0); // this expect method checks if we have got the expected result or not.
  });

  it('should return 1 if input is positive', () => {
    const result = compute(1);
    expect(result).toBe(2); // this expect method checks if we have got the expected result or not.
  });
});
