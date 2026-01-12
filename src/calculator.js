export const calculator = (a, b, operation) => {
  // Input validation
  if (typeof a !== "number" || typeof b !== "number") {
    return new TypeError("Both arguments must be numbers");
  }
  if (operation === "divide" && b === 0) {
    return new TypeError("Division by zero is not allowed");
  }
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return new TypeError("Arguments must be valid numbers");
  }

  // Perform the operation
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      return NaN;
  }

};

export default calculator;
