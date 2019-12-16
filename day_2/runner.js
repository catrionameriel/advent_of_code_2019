const Day2Module = require('./day_2');
let fs = require('fs');
const raw = fs.readFileSync('./data.txt').toString().trim();

const newData = Day2Module.runWithInput(raw, 12, 2);
console.log(newData);

function part2() {
  let x = 0;
  let data = raw;
  while (x <= 128) {
    let y = 0
    while (y <= 128) {
      const result = Day2Module.runWithInput(data, x, y).split(",")[0]
      if (result === "19690720") {
        return [x, y]
      }
      y++
    }
    x++
  };
}

const values = part2();

console.log(values[0].toString() + values [1].toString());
