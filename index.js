// Code your solution in this file!
function distanceFromHqInBlocks(inputValue) {
  let returnValue;
  inputValue >= 42 ? returnValue = inputValue - 42 : returnValue = 42 - inputValue;
  return returnValue;
}

function distanceFromHqInFeet(inputValue) {
  return (distanceFromHqInBlocks(inputValue) * 264);
}

function distanceTravelledInFeet(startInt, endInt) {
  return Math.abs(((endInt - startInt) * 264));
}

function calculatesFarePrice(startInt, endInt) {
  let checkDistance = distanceTravelledInFeet(startInt, endInt)

    if (checkDistance < 400) {
      return 0;
    }
    else if (checkDistance > 400 && checkDistance < 2000) {
      return ((checkDistance - 400) * 0.02);
    }
    else if (checkDistance > 2000 && checkDistance < 2500) {
      return 25;
    }
    else if (checkDistance > 2500) {
      return 'cannot travel that far'
    }
}
