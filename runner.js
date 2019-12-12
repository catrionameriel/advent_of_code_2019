const Day1Module = require('./day_1');
let fs = require('fs');
const data = fs.readFileSync('./data.txt').toString().trim().split('\n');

const newData = data.map((number) => {
  return Day1Module.calculateFuel(number);
});

console.log(Day1Module.sum(newData));

const allFuel = data.map((number) => {
  return Day1Module.calculateContinualFuel(number);
});

const fuelForEachMass = allFuel.map((array) => {
  return array.reduce((a, b) => {
    return a + b;
  })
})

console.log(Day1Module.sum(fuelForEachMass));
