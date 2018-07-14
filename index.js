// Code your solution in this file!

const hq = 42;
const blockLength = 264;

function distanceFromHqInBlocks(street){
  return Math.abs(hq - street);
};

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * blockLength;
};

function distanceTravelledInFeet(start, end){
  return Math.abs(start - end) * blockLength;
};

function calculatesFarePrice(start, end){
  distanceInFeet = distanceTravelledInFeet(start, end)
  if (distanceInFeet <= 400) {
    return 0;
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
};
