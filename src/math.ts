// src/math.ts

// Function to add two numbers
export function add(a: number, b: number): number {
    return a + b;
  }
  
  // Function to subtract two numbers
  export function subtract(a: number, b: number): number {
    return a - b;
  }
  
  // Function to multiply two numbers
  export function multiply(a: number, b: number): number {
    return a * b;
  }
  
  // Function to divide two numbers
  export function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Cannot divide by zero.");
    }
    return a / b;
  }
  