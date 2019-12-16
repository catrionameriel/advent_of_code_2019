const Day1Module = require('./day_1');

test('gets fuel of 2 from mass of 12', () => {
  expect(Day1Module.calculateFuel(12)).toBe(2);
});

test('gets fuel of 2 from mass of 14', () => {
  expect(Day1Module.calculateFuel(14)).toBe(2);
});

test('gets fuel of 654 from mass of 1969', () => {
  expect(Day1Module.calculateFuel(1969)).toBe(654);
});

test('gets fuel of 100756 from mass of 33583', () => {
  expect(Day1Module.calculateFuel(100756)).toBe(33583);
});

test('get fuel needed from mass of 12', () => {
  const answer = Day1Module.calculateContinualFuel(14);
  const expected = 2;
  expect(Day1Module.sum(answer)).toBe(expected);
});

test('get fuel needed from mass of 1969', () => {
  const answer = Day1Module.calculateContinualFuel(1969);
  const expected = 966;
  expect(Day1Module.sum(answer)).toBe(expected);
});

test('get fuel needed from mass of 100756', () => {
  const answer = Day1Module.calculateContinualFuel(100756);
  const expected = 50346;
  expect(Day1Module.sum(answer)).toBe(expected);
});
