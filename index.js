// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance > 42) {
    return distance - 42;
  } else {
    return 42 - distance;
  };
};

function distanceFromHqInFeet (distance) {
  let blocks = distanceFromHqInBlocks(distance);
  return blocks * 264;
}

function distanceTravelledInFeet(startStreet, endStreet){
  let travel = endStreet - startStreet;
  return Math.abs(travel) * 264;
};

// function calculatesFarePrice(startStreet, endStreet) {
//   let travel = (distanceTravelledInFeet(startStreet, endStreet);
//
//   if (travel <= 400) {
//     return 0;
//   } else if (travel > 400 && travel <= 2000) {
//     return travel * 0.02;
//   } else if (travel > 2000 && travel < 2500) {
//     return 25;
//   } else {
//     return `cannot travel that far`;
//   }
// }

function calculatesFarePrice (startStreet, endStreet) {
  let travel = distanceTravelledInFeet(startStreet, endStreet);

  if (travel <= 400) {
    return 0;
  } else if (travel > 400 && travel <= 2000) {
    return .02 * (travel - 400);
  } else if (travel > 2000 && travel < 2500) {
    return 25;
  } else {
    return `cannot travel that far`;
  }
}
