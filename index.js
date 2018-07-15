// Code your solution in this file!
function distanceFromHqInBlocks(startValue) {
  return Math.abs(startValue - 42);
}

function distanceFromHqInFeet(startValue) {
  return distanceFromHqInBlocks(startValue) * 264;
}

function distanceTravelledInFeet(startValue, endValue) {
  return Math.abs(startValue - endValue) * 264;
}

function calculatesFarePrice(startValue, endValue) {
  if (distanceTravelledInFeet(startValue, endValue) <= 400)
    return 0;
  else if (distanceTravelledInFeet(startValue, endValue) > 2500)
    return 'cannot travel that far';
  else if (distanceTravelledInFeet(startValue, endValue) <= 2000)
    return (distanceTravelledInFeet(startValue, endValue) - 400) * 0.02;
  else
    return 25;
}
