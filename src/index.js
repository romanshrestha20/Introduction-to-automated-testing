import calculator from './calculator.js';

// Example usage of the calculator function
let result = calculator(10, 5, "add");
console.log(`Addition Result: ${result}`);
console.log(typeof result);
console.log("------------------------");

result = calculator(10, 5, "subtract");
console.log(`Subtraction Result: ${result}`);
console.log(typeof result);

console.log("------------------------");

result = calculator(10, 5, "multiply");
console.log(`Multiplication Result: ${result}`);
console.log(typeof result);

console.log("------------------------");

result = calculator(10, 5, "divide");
console.log(`Division Result: ${result}`);
console.log(typeof result);

console.log("------------------------");

result = calculator(10, 0, "divide");
console.log(`Division by Zero Result: ${result}`);
console.log(typeof result);

console.log("------------------------");
