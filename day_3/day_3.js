function findNearestIntersect(inputA, inputB) {
  let startPoint = { x: 0, y: 0 };
  const newACoords = [];
  const newBCoords = [];

  inputA.forEach((coord) => {
    let instruction = instructionsLookUp[coord.charAt(0)];
    let numberOfMoves = parseInt(coord.match(regex));
    let newCoord = instruction(startPoint.x, startPoint.y, numberOfMoves);
    newACoords.push(newCoord);
    startPoint = newCoord;
  });

  startPoint = { x: 0, y: 0 };
  inputB.forEach((coord) => {
    let instruction = instructionsLookUp[coord.charAt(0)];
    let numberOfMoves = parseInt(coord.match(regex));
    let newCoord = instruction(startPoint.x, startPoint.y, numberOfMoves);
    newBCoords.push(newCoord);
    startPoint = newCoord;
  });

  console.log(newACoords);
  console.log(newBCoords);
  const intersection = newACoords.filter(element => newBCoords.includes(element))
  return intersection;
}

function right(xPosition, yPosition, number) {
  return {x: xPosition + number, y: yPosition};
}

function left(xPosition, yPosition, number) {
  return {x: xPosition - number, y: yPosition};
}

function up(xPosition, yPosition, number) {
  return {x: xPosition, y: yPosition + number};
}

function down(xPosition, yPosition, number) {
  return {x: xPosition, y: yPosition - number};
}

const instructionsLookUp = {
  R: right,
  U: up,
  D: down,
  L: left,
}

const regex = /[0-9]/

module.exports = findNearestIntersect;
