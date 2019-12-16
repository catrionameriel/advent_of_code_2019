function meetsCriteria(inputNumber) {
  const stringArray = inputNumber.toString().split('');
  const numberArray = stringArray.map(Number);
  const numbersAccumulate = numberArray.every(eachNumberAccumulates);
  return numbersAccumulate && hasDoubleNumberIn(numberArray);
}

function eachNumberAccumulates(currentNumber, index, array) {
  let previousNumber = array[index - 1];
  return !previousNumber || currentNumber >= previousNumber;
}

function hasDoubleNumberIn(array) {
  let numberCount = {};
  array.forEach((number, index, array) => {
    if (!numberCount[number]) {
      numberCount[number] = 1;
    } else if (number === array[index - 1]) {
      numberCount[number] += 1;
    }
  });
  return Object.values(numberCount).includes(2);
}

module.exports = meetsCriteria;
