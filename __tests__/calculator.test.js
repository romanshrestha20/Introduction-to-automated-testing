import calculator from "../src/calculator";

describe("Calculator Division Tests", () => {
  // 1. Positive Test
  test("should return correct result when dividing valid numbers", () => {
    const result = calculator(10, 2, "divide");
    expect(result).toBe(5);
  });

  // 2. Negative Test: Invalid Type
  test("should return TypeError if arguments are not numbers (String input)", () => {
    const result = calculator("10", 2, "divide");
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Both arguments must be numbers");
  });

  // 3. Negative Test: Division by Zero
  test("should return TypeError when dividing by zero", () => {
    const result = calculator(5, 0, "divide");
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Division by zero is not allowed");
  });

  // 4. Negative Test: Input is NaN
  test("should return TypeError if an argument is literally NaN", () => {
    const result = calculator(Number.NaN, 5, "divide");
    expect(result).toBeInstanceOf(TypeError);
    expect(result.message).toBe("Arguments must be valid numbers");
  });

  // 5. Negative Test: Invalid Operation
  test("should return NaN if the operation is unknown or not supported", () => {
    const result = calculator(10, 2, "modulus");
    expect(result).toBeNaN();
  });
});
