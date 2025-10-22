/**
 * Author: Devin Ledesma
 * Date: 21 October 2025
 * File: calculate-average-array.spec.js
 * Description: This script tests the calculate-average-array function.
 */
"use strict";

const { calculateAverage } = require("../../src/utils/calculate-average-array");

// The describe() function is a test suite that contains one or more tests
describe("calculate-average-array.js", () => {
  // The it() function is a test suite that contains one or more expectations
  it("should return null if array is empty", () => {
    expect(calculateAverage([])).toBeNull(); // Output: null
  });

  it("should parse the input string into an array of numbers", () => {
    expect(calculateAverage([2, 4, "6", 8])).toBe(5);
  });

  it("should return  average for positive numbers", () => {
    expect(calculateAverage([2, 4, 6, 8])).toBe(5);
  });
});
