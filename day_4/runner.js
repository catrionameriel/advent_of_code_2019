const meetsCriteria = require('./day_4');
let fs = require('fs');
const data = fs.readFileSync('./data.txt').toString().trim('\n').split('-');

const numbersThatWork = [];

function checkNumbers() {
  let testNumber = data[0];
  while(testNumber <= data[1]) {
    if (meetsCriteria(testNumber)) {
      numbersThatWork.push(testNumber);
    }
     testNumber ++;
  }
}

checkNumbers();
console.log(numbersThatWork.length);
