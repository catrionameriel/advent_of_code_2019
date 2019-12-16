const findNearestIntersect = require('./day_3')

test('intersect is 6 for inputs', () => {
  const inputA = ['R8', 'U5', 'L5', 'D3'];
  const inputB = ['U7', 'R6', 'D4', 'L4'];
  expect(findNearestIntersect(inputA, inputB)).toBe(6);
});
