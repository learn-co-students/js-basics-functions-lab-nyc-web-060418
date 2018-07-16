// Code your solution in this file!
function distanceFromHqInBlocks(street) {
  let result = 42 - street;

  return Math.abs(result);
}

function distanceFromHqInFeet(street) {
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(street1, street2) {
  return Math.abs(street1 - street2) * 264;
}

function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);

  switch (true) {
    case distance <= 400:
      return 0;
      break;
    case distance > 400 && distance <= 2000:
      return (distance - 400) * 0.02;
      break;
    case distance > 2000 && distance < 2500:
      return 25;
      break;
    default:
      return "cannot travel that far"
  }
}
