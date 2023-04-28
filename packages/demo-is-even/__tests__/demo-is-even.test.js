const { isEven } = require("../dist/demo-is-even.js");

test("demo for even", () => {
  expect(isOdd(1)).toBe(false);
  expect(isOdd(2)).toBe(true);
  expect(isOdd(3)).toBe(false);
});
