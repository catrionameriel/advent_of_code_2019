const add = (x, y) => x + y
const multiply = (x, y) => x * y

const instructions = {
  1: add,
  2: multiply,
}

function runInstruction(position, data) {
  const firstInstruction = instructions[data[position]]

  const firstPosition = data[position + 1]
  const secondPosition = data[position + 2]
  const firstValue = data[firstPosition]
  const secondValue = data[secondPosition]

  const result = firstInstruction(firstValue, secondValue)

  const thirdPosition = data[position + 3]

  data[thirdPosition] = result

  return data
}

function run(input) {
  let data = input.split(",").map(Number)
  let currentPosition = 0

  while (data[currentPosition] !== undefined && data[currentPosition] !== 99) {
    runInstruction(currentPosition, data)
    currentPosition += 4
  }

  return data.join(",")
}

function runWithInput(raw, first, second) {
  const data = raw.split(",")
  data[1] = first
  data[2] = second

  return run(data.join(","))
}

module.exports = { run: run, runWithInput: runWithInput }
