function calculateFuel(mass) {
  const number = parseInt(mass);
  return (Math.floor(number / 3) - 2);
}

function sum(array) {
  return array.reduce((a, b) => a + b);
}

function calculateContinualFuel(mass) {
  let input = mass;
  const output = [];
  while (input >= 0) {
    input = calculateFuel(input);
    if (input > 0 ) {
      output.push(input)
    };
  }
  return output;
}

module.exports = { calculateFuel: calculateFuel, sum: sum, calculateContinualFuel: calculateContinualFuel } ;
