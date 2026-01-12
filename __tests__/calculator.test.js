import calculator from "../src/calculator.js";
import { test, describe, expect } from "@jest/globals";

describe("Calculator Function", () => {
  // Test addition
  test("should add two numbers correctly", () => {
    expect(calculator(5, 6, "add")).toBe(11);
  });

  // test subtraction
  test("should subtract two numbers correctly", () => {
    expect(calculator(10, 4, "subtract")).toBe(6);
  });

  // test multiply
  test("should multiply two numbers correctly", () => {
    expect(calculator(10, 4, "multiply")).toBe(40);
  });

  // test divide
  test("should divide two numbers correctly", () => {
    expect(calculator(20, 4, "divide")).toBe(5);
  });

  // test both inputs should be number
  test("should return error when inputs are not numbers", () => {
    expect(calculator("a", "b", "divide")).toEqual(
      new TypeError("Both arguments must be numbers")
    );
  });

  // test should return error when divide by zero
  test("should return error when number is divided by zero", () => {
    expect(calculator(6, 0, "divide")).toEqual(
      new TypeError("Division by zero is not allowed")
    );
  });
  // test both arguments should not be NaN
  test("should return error when arguments are NaN", () => {
    expect(calculator(NaN, NaN, "add")).toEqual(
      new TypeError("Arguments must be valid numbers")
    );
  });
});
