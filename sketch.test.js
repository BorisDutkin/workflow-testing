const { test, expect } = require("@jest/globals");

const sum = require("./sketch");

test(`adds 1 + 2 to equal ${1 + 2}`, () => {
  expect(sum(1, 2)).toBe(3);
});
