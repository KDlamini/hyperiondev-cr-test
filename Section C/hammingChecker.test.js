// Import the hammingChecker function from the solution file
import hammingChecker from './hammingChecker';

// Define a test suite using describe function
describe("hammingChecker", () => {
  // Define test cases using test function and expect function
  test("uncorrupted block with length divisible by four", () => {
    expect(hammingChecker("0010001011100100")).toBe("0010001011100100");
  });

  test("corrupted block with one flipped bit in position nine", () => {
    expect(hammingChecker("0111001111100100")).toBe("1111001011100100");
  });

  test("corrupted block with one flipped bit in position zero", () => {
    expect(hammingChecker("1110000011100100")).toBe("1011000011100100");
  });

  test("uncorrupted block with only one non-zero digit", () => {
    expect(hammingChecker("0000000011100100")).toBe("0101000011100100");
  });

  test("uncorrupted block with length not divisible by four", () => {
    expect(hammingChecker("11100100110010100")).toBe(
      "11100100110010100"
    );
  });

  test("corrupted block with one flipped bit in position sixteen", () => {
    expect(hammingChecker("10100101110010101")).toBe(
      "11100100110010111"
    );
  });

  test('empty block', () => {

    expect(hammingChecker('')).toBe('');

  });

  test('nil input', () => {

    expect(() => hammingChecker(null)).toThrow();

  });

});