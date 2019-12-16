const Day2Module = require('./day_2');
let fs = require('fs');
const raw = fs.readFileSync('./data.txt').toString().trim();

const testCases = [
  ['1,0,0,0,99', '2,0,0,0,99'],
  ['2,3,0,3,99', '2,3,0,6,99'],
  ['2,4,4,5,99,0', '2,4,4,5,99,9801'],
  ['1,1,1,4,99,5,6,0,99', '30,1,1,4,2,5,6,0,99'],
]

test.each(testCases)('%s works to produce %s', (input, expected) => {
  expect(Day2Module.run(input)).toEqual(expected)
})
