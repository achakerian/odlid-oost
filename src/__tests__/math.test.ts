// src/__tests__/math.test.ts
import { add, subtract, multiply, divide } from '../math';

describe('Math Functions', () => {
  test('should add two numbers correctly', () => {
    expect(add(10, 5)).toBe(15);
  });

  test('should subtract two numbers correctly', () => {
    expect(subtract(10, 5)).toBe(5);
  });

  test('should multiply two numbers correctly', () => {
    expect(multiply(10, 5)).toBe(50);
  });

  test('should divide two numbers correctly', () => {
    expect(divide(10, 5)).toBe(2);
  });

  test('should throw an error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero.');
  });
});
