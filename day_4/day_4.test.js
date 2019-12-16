const meetsCriteria = require('./day_4');

test(('111111 returns false'), () => {
  expect(meetsCriteria('111111')).toBe(false);
})

test(('223450 returns false'), () => {
  expect(meetsCriteria('223450')).toBe(false);
})

test(('123789 returns false'), () => {
  expect(meetsCriteria('123789')).toBe(false);
})

test(('112233 returns true'), () => {
  expect(meetsCriteria('112233')).toBe(true);
})

test(('123444 returns false'), () => {
  expect(meetsCriteria('123444')).toBe(false);
})

test(('111122 returns true'), () => {
  expect(meetsCriteria('111122')).toBe(true);
})

test(('111234 returns false'), () => {
  expect(meetsCriteria('111234')).toBe(false);
})

test(('444577 returns true'), () => {
  expect(meetsCriteria('444577')).toBe(true);
})
