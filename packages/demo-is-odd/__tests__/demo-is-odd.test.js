const { isOdd } = require("../dist/demo-is-odd.js");

test("demo for odd", () => {
  expect(isOdd(1)).toBe(true);
  expect(isOdd(2)).toBe(false);
  expect(isOdd(3)).toBe(true);
});
